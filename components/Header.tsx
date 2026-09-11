"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Header({ active }: { active?: "work" | "about" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);

  useEffect(() => {
    let previousY = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrollingUp(currentY < previousY || currentY < 16);
      previousY = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`siteHeader${scrollingUp ? " siteHeaderVisible" : " siteHeaderHidden"}`}>
      <Link className="brand" href="/">Janine Wong</Link>
      <button className="menuButton" type="button" aria-expanded={menuOpen} aria-controls="primaryNavigation" onClick={() => setMenuOpen(open => !open)}>
        <span className="srOnly">{menuOpen ? "Close" : "Open"} navigation</span>
        <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
      </button>
      <nav id="primaryNavigation" className={`nav${menuOpen ? " navOpen" : ""}`} aria-label="Primary navigation">
        <Link onClick={closeMenu} className={active === "work" ? "navActive" : undefined} aria-current={active === "work" ? "page" : undefined} href="/#work">Work</Link>
        <Link onClick={closeMenu} className={active === "about" ? "navActive" : undefined} aria-current={active === "about" ? "page" : undefined} href="/about">About</Link>
        <a onClick={closeMenu} href="/JanineWong_Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        <a onClick={closeMenu} className="contactButton" href="mailto:jaeninwong@gmail.com">Get in touch</a>
      </nav>
    </header>
  );
}
