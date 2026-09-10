import type { CSSProperties } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MetricGrid, SplitHero, StudyImage } from "@/components/CaseStudyContent";
import { PromotionsCaseStudy } from "@/components/PromotionsCaseStudy";
import { PremierBaysCaseStudy } from "@/components/PremierBaysCaseStudy";
import { DeveloperCenterCaseStudy } from "@/components/DeveloperCenterCaseStudy";
import { Fut18CaseStudy } from "@/components/Fut18CaseStudy";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";
import { requireAccess } from "@/lib/case-study-access";

export function generateStaticParams() { return caseStudies.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const study = getCaseStudy((await params).slug);
  return study ? { title: `${study.title} — Janine Wong`, robots: study.protected ? { index: false, follow: false } : undefined } : {};
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();
  if (study.protected) await requireAccess(`/work/${slug}`);
  if (study.slug === "promotions") return <PromotionsCaseStudy />;
  if (study.slug === "premier-bays") return <PremierBaysCaseStudy />;
  if (study.slug === "developer-center") return <DeveloperCenterCaseStudy />;
  if (study.slug === "fut18") return <Fut18CaseStudy />;
  const isMultichannel = study.slug === "multichannel-selling";

  return <main className={study.className} style={{ "--case-metric-color": study.colors.metricColor } as CSSProperties}><Header />{study.sections.map((section, index) => {
    if (section.kind === "intro") return <section key={index} className="heroIntro"><h1>{section.title}</h1><p>{section.body}</p></section>;
    if (section.kind === "hero") return <SplitHero key={index} {...section} variant={isMultichannel ? "multichannel" : "manage"} />;
    if (section.kind === "split") { const Subtitle = section.subtitleElement ?? "h3"; const copy = <div className={[isMultichannel ? "mcCopy" : "caseCopy caseCopyCentered", section.copyClassName].filter(Boolean).join(" ")}><h2>{section.title}</h2>{section.subtitle && <Subtitle className={section.subtitleClassName ?? (isMultichannel && Subtitle === "h3" ? "mcSubtitle" : undefined)}>{section.subtitle}</Subtitle>}{section.body.map((body) => <p key={body}>{body}</p>)}{section.metrics && <MetricGrid metrics={section.metrics} className={isMultichannel ? "mcMetrics" : ""} />}{section.lessons && <div className="mcLessons">{section.lessons.map((lesson) => <div key={lesson.title}><h3>{lesson.title}</h3><p>{lesson.body}</p></div>)}</div>}</div>; const visuals = section.images ? <div className={section.imagePairClassName ?? "mcImagePair"}>{section.images.map((image) => <StudyImage key={image.src} image={image} />)}</div> : section.image && <StudyImage image={section.image} className={[isMultichannel ? "mcBleed" : "caseVisual", section.visualClassName].filter(Boolean).join(" ")} />; return <section key={index} className={section.className}>{copy}{visuals}</section>; }
    if (section.kind === "wide") return <section key={index} className={section.className}><div className={[isMultichannel ? "mcCopy" : "caseHeadingBlock", section.headingClassName].filter(Boolean).join(" ")}>{section.eyebrow && <div className="caseEyebrow">{section.eyebrow}</div>}{section.title && <h2 className={section.titleClassName}>{section.title}</h2>}{section.body?.map((body, bodyIndex) => { const Body = section.bodyElements?.[bodyIndex] ?? "p"; return <Body key={body}>{body}</Body>; })}{section.metrics && <MetricGrid metrics={section.metrics} className={section.metricsClassName} />}</div>{section.image && <StudyImage image={section.image} className="caseWideVisual" />}</section>;
    if (section.kind === "applications") return <section key={index} className="caseSection applicationsSection">{section.items.map((item) => { const copy = <div className="applicationCopy">{item.heading && <h2>{item.heading}</h2>}<h3 className={item.titleClassName}>{item.title}</h3><MetricGrid metrics={item.metrics} /></div>; const visual = <StudyImage image={item.image} className="applicationVisual" />; return <div className={`applicationRow ${item.reverse ? "applicationRowTextRight" : "applicationRowTextLeft"}`} key={item.title}>{item.reverse ? <>{visual}{copy}</> : <>{copy}{visual}</>}</div>; })}</section>;
    if (section.kind === "list") return <section key={index} className="caseSection systemSection"><div className="systemCopy"><h2>{section.title}</h2><p>{section.body}</p><div className="systemList">{section.items.map((item) => <div key={item.title}><strong>{item.title}</strong><span>{item.body}</span></div>)}</div></div><StudyImage image={section.image} className="systemVisual" /></section>;
    if (section.kind === "impact") return <section key={index} className="impactSection"><div className="impactInner"><div className="caseEyebrow">{section.eyebrow}</div><MetricGrid metrics={section.metrics} className="impactGrid" /></div></section>;
    return <section key={index} className="nextProjectSection"><div className="nextProjectHeading"><div className="nextProjectLabel">NEXT PROJECT</div><h2>{section.title}</h2></div><a className="nextProjectBanner" href={section.href} aria-label={`View ${section.title} case study`}><div className="nextProjectInner"><p>{section.body}</p><span>VIEW CASE STUDY →</span></div><div className="nextProjectVisual"><img className={section.image.imageClassName} src={section.image.src} alt={section.image.alt} /></div></a></section>;
  })}<Footer /></main>;
}
