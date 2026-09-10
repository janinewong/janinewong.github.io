import { CaseImage } from "@/components/CaseImage";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

type Point = { title: string; body: string };

function Points({ points }: { points: Point[] }) {
  return <div className="futPoints">{points.map(point => <div key={point.title}><h3>{point.title}</h3><p>{point.body}</p></div>)}</div>;
}

export function Fut18CaseStudy() {
  return <main className="fut18CaseStudy">
    <Header />
    <section className="futHero">
      <div className="futHeroCopy">
        <div><h1>FUT 18 Companion App</h1><p>Unifying the web and mobile experiences into one responsive app for FIFA Ultimate Team players.</p></div>
        <div className="futMeta"><strong>Electronic Arts <i>·</i> 2017</strong><span>Product Design · Responsive Design · Interaction Design</span></div>
      </div>
      <div className="futHeroVisual"><CaseImage src="/images/fut18/hero.png" alt="FUT 18 Companion App interface" experimentalImageZoom /></div>
    </section>

    <section className="futSection futProblem">
      <div className="futCopy"><h2>Problem</h2><h3>Two apps. Two experiences. Twice the complexity.</h3><p>FUT 17 had separate web and mobile apps with different interfaces, features, and codebases. At the same time, declining Web App usage and a growing mobile audience created an opportunity to rethink the experience.</p><p>The goal was to move toward one responsive experience and one codebase, reducing maintenance while creating a more consistent experience for players.</p><Points points={[{ title: "Reduce maintenance", body: "Replace separate web and mobile experiences with one responsive app." }, { title: "Create consistency", body: "Let players manage their FUT club across devices without relearning the experience." }]} /></div>
      <div className="futStoryVisual"><CaseImage src="/images/fut18/story.png" alt="FUT web and mobile experiences" /></div>
    </section>

    <section className="futSection futGoals"><div className="futWideCopy"><h2>Goals</h2><h3>One experience, built to work everywhere.</h3><div className="futGoalGrid"><Points points={[{ title: "One responsive app", body: "Reduce the cost of maintaining separate experiences." }, { title: "Increase downloads", body: "Achieve higher YoY downloads at launch." }, { title: "Manage anywhere", body: "Give players access to their FUT club away from their console." }]} /></div></div></section>

    <section className="futSection futApproach">
      <div className="futCopy"><h2>Unifying the UI wasn&apos;t enough.</h2><p>An audit of the existing experience revealed another problem: FUT could be difficult for new players to understand.</p><p>Game-specific terminology, complex features, and a lack of empty states meant players received little guidance once they entered the app.</p><p>That created two experience opportunities:</p><Points points={[{ title: "Educate", body: "Help new players understand FUT without overwhelming them." }, { title: "Delight", body: "Give returning players more of the excitement and personality of the console experience." }]} /></div>
      <div className="futApproachVisual"><CaseImage src="/images/fut18/approach.png" alt="Examples of the FUT 18 app interface" /></div>
    </section>

    <section className="futSection futOnboarding">
      <div className="futCopy"><h2>Helping new players learn as they go.</h2><p>I adapted the console team&apos;s new onboarding experience for the Companion App, then extended that thinking beyond initial setup with contextual empty states throughout the product.</p><Points points={[{ title: "Onboarding", body: "Introduce players to their FUT identity and core concepts." }, { title: "Empty states", body: "Explain features at the moment players encounter them." }]} /><p>This gave new players more context without adding unnecessary friction for returning players.</p></div>
      <div className="futOnboardingVisual">
        <CaseImage src="/images/fut18/onboarding-top.png" alt="FUT 18 onboarding and transfer targets" />
        <CaseImage src="/images/fut18/onboarding-bottom.png" alt="FUT 18 empty-state guidance" />
      </div>
    </section>

    <section className="futSection futPack">
      <div className="futPackVisual"><CaseImage src="/images/fut18/pack-opening.png" alt="FUT pack-opening animation" /></div>
      <div className="futCopy"><h2>Bringing the excitement of FUT beyond the console.</h2><p>For returning players, I looked for opportunities to strengthen their connection to their club.</p><p>Opening a pack could reveal a rare and valuable item, but the existing Companion App experience didn&apos;t reflect the excitement of that moment.</p><p>I redesigned the pack-opening animation to better capture the anticipation and celebration of the console experience, prototyping the interaction in After Effects before translating it for development.</p></div>
    </section>

    <section className="futImpact"><div className="futImpactHeadline"><strong>3x</strong><h2>the downloads<br />at launch</h2></div><div className="futImpactMetric"><strong>+200% YoY</strong><span>Companion App downloads at launch</span></div><div className="futMetricsVisual"><CaseImage src="/images/fut18/metrics.png" alt="FUT 18 Companion App download metrics" /></div></section>

    <section className="futNext"><div className="futNextHeading"><span>NEXT PROJECT</span><h2>Manage &amp; Analytics Frameworks</h2></div><a className="futNextBanner" href="/work/manage-framework"><div><h3>Building a scalable foundation for how Amazon sellers manage their business.</h3><span>VIEW CASE STUDY →</span></div><img src="/project-images/homepage/manage-d26e28bb.png" alt="Manage & Analytics Frameworks preview" /></a></section>
    <Footer />
  </main>;
}
