"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Screen = { src: string; alt: string };
export function CaseImage({ src, alt, screens, imageClassName, experimentalImageZoom = true }: Screen & { screens?: Screen[]; imageClassName?: string; experimentalImageZoom?: boolean }) {
  const slides = screens ?? [{ src, alt }];
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const current = slides[index];

  useEffect(() => {
    setMounted(true);
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update(); media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (slides.length < 2 || paused || open || reducedMotion) return;
    const timer = setInterval(() => setIndex(i => (i + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, [slides.length, paused, open, reducedMotion, index]);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [open]);

  function select(next: number) {
    setIndex((next + slides.length) % slides.length);
    setZoomed(false);
  }
  const controls = slides.length > 1 && <div className="caseCarouselControls" aria-label="Screen navigation">
    <button onClick={() => select(index - 1)} aria-label="Previous screen">←</button>
    <span>{index + 1} / {slides.length}</span>
    <button onClick={() => select(index + 1)} aria-label="Next screen">→</button>
    {!open && !reducedMotion && <button onClick={() => setPaused(!paused)}>{paused ? "Play" : "Pause"}</button>}
  </div>;
  return <>
    <div className={screens ? "caseCarousel" : undefined}>
      <button ref={trigger} className={`caseImageTrigger${screens ? " caseCarouselStage" : ""}`} aria-label={`Enlarge ${current.alt}`} onClick={() => {
        setZoomed(false); setOpen(true); dialog.current?.showModal();
      }}>
        {slides.map((slide, i) => <img key={slide.src} src={slide.src} alt={i === index ? slide.alt : ""} aria-hidden={i !== index} className={[screens ? (i === index ? "isActive" : "") : "", imageClassName].filter(Boolean).join(" ")} />)}
      </button>
      {controls}
    </div>
    {mounted && createPortal(<dialog ref={dialog} className="caseLightbox" aria-label={current.alt} onClose={() => {
      setOpen(false); setZoomed(false); trigger.current?.focus();
    }} onClick={e => { if (e.target === e.currentTarget) dialog.current?.close(); }}>
      <div className="caseLightboxToolbar">
        <span>{current.alt}</span>
        {controls}
        {experimentalImageZoom ? <span className="caseLightboxZoomHint">{zoomed ? "Click image to fit" : "Click image to zoom"}</span> : <button onClick={() => setZoomed(!zoomed)} aria-pressed={zoomed}>{zoomed ? "Fit image" : "Zoom in"}</button>}
        <button autoFocus onClick={() => dialog.current?.close()} aria-label="Close image">Close ×</button>
      </div>
      {experimentalImageZoom ? <button type="button" className={`caseLightboxCanvas caseLightboxCanvasInteractive${zoomed ? " isZoomed" : ""}`} onClick={() => setZoomed(!zoomed)} aria-label={zoomed ? "Fit image" : "Zoom image"}><img src={current.src} alt={current.alt} /></button> : <div className={`caseLightboxCanvas${zoomed ? " isZoomed" : ""}`}><img src={current.src} alt={current.alt} /></div>}
    </dialog>, document.body)}
  </>;
}
