import Link from "next/link";
import { CaseImage } from "@/components/CaseImage";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const asset = (file: string) => `/images/developer-center/${file}`;

function Metrics({ children }: { children: React.ReactNode }) {
  return <div className="dcMetrics">{children}</div>;
}

export function DeveloperCenterCaseStudy() {
  return <main className="developerCenterCaseStudy">
    <Header active="work" />
    <section className="dcHero">
      <div className="dcHeroCopy"><div><h1>Developer Center</h1><p>Making Mobify&apos;s developer documentation easier to find and use.</p></div><div className="dcMeta"><strong>Mobify (Salesforce) · 2020</strong><span>Product design · Visual design · UX research</span></div></div>
      <div className="dcHeroVisual"><CaseImage src={asset("hero.png")} alt="Developer Center home page" imageClassName="dcHeroImage" /></div>
    </section>

    <section className="dcChallenge"><div className="dcTwoColumn"><div className="dcBlock"><h2>Challenge</h2><h3>Developers couldn&apos;t find what they needed.</h3><p>Mobify&apos;s Dev Center provided documentation for partner developers building ecommerce sites, but finding the right information was difficult.</p><Metrics><div><b>1,200+ hrs</b><span>of support per month</span></div><div><b>84%</b><span>of sessions used search</span></div><div><b>12+</b><span>pages viewed per session</span></div></Metrics></div><div className="dcBlock"><h2>Goal</h2><h3>Make the Dev Center more self-serve.</h3><p>I focused on helping developers find information faster, understand content at a glance, and rely less on our support team to answer questions.</p><Metrics><div><b>10%</b><span>Decrease in support team&apos;s hours per month</span></div><div><b>30s</b><span>Decrease in average time after search</span></div><div><b>25%</b><span>Decrease in pages per session viewed</span></div></Metrics></div></div></section>

    <section className="dcFindability"><div className="dcIntro"><h2>The problem wasn&apos;t just search.</h2><p>Analytics, card sorting, and usability testing revealed three opportunities:</p><div className="dcOpportunities"><div><h3>Findability</h3><p>Developers naturally grouped content into Docs, APIs, and Guides.</p></div><div><h3>Readability</h3><p>Overview pages contained too much information to quickly scan.</p></div><div><h3>Search</h3><p>Search was useful, but developers primarily relied on it when they couldn&apos;t find information through navigation.</p></div></div></div><figure className="dcWideImage"><CaseImage src={asset("existing-structure.png")} alt="Existing Developer Center documentation structure" /><figcaption>The existing structure made it difficult to know where to start</figcaption></figure></section>

    <section className="dcDesign"><div className="dcDesignTop"><div className="dcDesignLead"><h2>Finding the right article should be fast.</h2><p>I redesigned the information architecture and content experience around how developers actually navigated the site.</p></div><div className="dcNavPair"><figure><CaseImage src={asset("figma-refresh-12.png")} alt="Developer Center navigation before redesign" imageClassName="dcNavBefore" /></figure><span aria-hidden="true">→</span><figure><CaseImage src={asset("figma-refresh-9.png")} alt="Developer Center reference navigation redesign" /></figure><figcaption>Clearer navigation: Organized content around the mental models uncovered in research.</figcaption></div></div><div className="dcDesignGrid"><figure><CaseImage src={asset("hero.png")} alt="Developer Center home page with scannable content" imageClassName="dcHomeCrop" /><figcaption>Easier to scan: Shortened overview content so developers could quickly determine what&apos;s relevant.</figcaption></figure><figure><CaseImage src={asset("navigation.png")} alt="Developer Center search interface" /><figcaption>Search when you need it: Kept search accessible without making it the primary navigation method.</figcaption></figure></div></section>

    <section className="dcOutcomes"><h2>Outcomes</h2><p>A more self-serve Dev Center. The redesigned experience helped developers find and consume documentation with less unnecessary navigation.</p><Metrics><div><b>5%</b><span>Decrease in support team&apos;s hours per month</span><em>Target: 10%</em></div><div><b>1m</b><span>Decrease in average time after search</span><em>Target: 30s</em></div><div><b>50%</b><span>Decrease in pages per session viewed</span><em>Target: 25%</em></div></Metrics><p>Developers were able to get to the information they needed without navigating through as many pages.</p></section>

    <section className="dcReflection"><h2>What I&apos;d do differently.</h2><p>Get qualitative feedback sooner. Analytics helped identify where developers struggled, but earlier qualitative research into the existing experience would have helped me understand the why sooner.</p><p>Next: Expand the self-serve experience with resources like video tutorials and a developer community.</p></section>

    <section className="dcNext"><div className="dcNextHeading"><span>NEXT PROJECT</span><h2>FUT 18 Companion App</h2></div><Link className="dcNextBanner" href="/work/fut18"><div><p>Revolutionizing the FIFA Ultimate Team 18 Companion App interface.</p><span>VIEW CASE STUDY →</span></div><img src={asset("next-project.png")} alt="FUT 18 Companion App preview" /></Link></section>
    <Footer />
  </main>;
}
