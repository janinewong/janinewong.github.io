import { CaseImage } from "@/components/CaseImage";
import type { CaseStudyMetric, CaseStudyImage } from "@/data/caseStudies";

export function MetricGrid({ metrics, className = "" }: { metrics: CaseStudyMetric[]; className?: string }) {
  return <div className={`caseMetricGrid ${className}`}>{metrics.map((metric) => <div className={`caseMetric ${metric.className ?? ""}`} key={`${metric.value}-${metric.label ?? ""}`}><div className="caseMetricValue">{metric.value}</div>{metric.label && <div className="caseMetricLabel">{metric.label}</div>}</div>)}</div>;
}

export function StudyImage({ image, className = "" }: { image: CaseStudyImage; className?: string }) {
  return <div className={className} style={image.aspectRatio ? { aspectRatio: image.aspectRatio } : undefined}><CaseImage {...image} imageClassName={image.imageClassName} /></div>;
}

export function SplitHero({ title, deck, meta, disciplines, image, variant }: { title: string; deck: string; meta: string; disciplines: string; image: CaseStudyImage; variant: "manage" | "multichannel" }) {
  const mc = variant === "multichannel";
  return <section className={mc ? "mcHero" : "manageHero"}><div className={mc ? "mcHeroCopy" : "manageHeroCopy"}><div><h1>{title}</h1><p className={mc ? undefined : "manageHeroDeck"}>{deck}</p></div><div className={mc ? "mcMeta" : "manageMeta"}><strong>{meta}</strong><span>{disciplines}</span></div></div><StudyImage className={mc ? "mcHeroVisual" : "manageHeroVisual"} image={image} /></section>;
}
