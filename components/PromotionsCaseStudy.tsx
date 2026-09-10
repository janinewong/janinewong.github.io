import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CaseImage } from "@/components/CaseImage";

const asset = (name: string) => `/images/promotions/${name}`;

function Phone({ src, alt }: { src: string; alt: string }) {
  return <div className="promotionsPhone"><img className="promotionsPhoneFrame" src={asset("phone-blue.png")} alt="" /><CaseImage src={asset(src)} alt={alt} imageClassName="promotionsPhoneScreen" /></div>;
}

function Metrics({ items }: { items: { value: string; label: string }[] }) {
  return <div className="promotionsMetrics">{items.map(({ value, label }) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}</div>;
}

export function PromotionsCaseStudy() {
  return <main className="promotionsFigmaCaseStudy">
    <Header />
    <section className="promotionsHero">
      <div className="promotionsHeroCopy">
        <div><h1>Promotions</h1><p>Designing a flexible way for cities to create parking promotions while preventing discount misuse.</p></div>
        <div className="promotionsMeta"><strong>PayByPhone <i>·</i> 2022</strong><span>Product Design · Systems Thinking · UX Research</span></div>
      </div>
      <div className="promotionsHeroImage"><CaseImage src={asset("hero.png")} alt="Promotions configuration interface" /></div>
    </section>

    <section className="promotionsProblem">
      <div className="promotionsProblemCopy">
        <h2>Problem</h2><h3>Discount parking was being used as a loophole.</h3>
        <p>Consumers could repeatedly use free or discounted parking instead of transitioning to paid sessions, creating revenue loss and dissatisfaction among key city clients.</p>
        <Metrics items={[{ value: "1,000", label: "duplicate free sessions / month" }, { value: "€109K", label: "annual lost revenue" }, { value: "7", label: "platinum cities affected" }]} />
      </div>
      <div className="promotionsProblemPhones"><Phone src="phone-session.png" alt="Parking session with a promotion" /><Phone src="phone-code.png" alt="Location-code parking entry" /></div>
    </section>

    <section className="promotionsNeeds">
      <div className="promotionsCopyWide"><h2>The solution had to work for cities and drivers.</h2><p>The existing workaround created friction on both sides:</p>
        <div className="promotionsAudience"><div><strong>Admins</strong><span>Needed fast setup, but every city had different promotion rules.</span></div><div><strong>Consumers</strong><span>Had to wait for discounted parking to expire and remember a separate location code to continue with paid parking.</span></div></div>
        <div className="promotionsPrinciples"><span>GUIDING PRINCIPLES</span><strong>Seamless · Flexible · Fast</strong></div>
      </div>
      <figure className="promotionsFigure"><CaseImage src={asset("solution-desktop.png")} alt="Old Admin workflow interface" /><figcaption>Old Admin workflow interface</figcaption></figure>
    </section>

    <section className="promotionsBalance">
      <div className="promotionsBalanceCopy"><h2>Finding the right balance between speed and flexibility.</h2><p>I initially explored templates to make promotion setup fast, but usability testing revealed a tradeoff: predefined promotion types couldn’t accommodate the different rules cities needed.</p></div>
      <div className="promotionsFindings"><div><strong>Hard to find</strong><span>Admins expected promotions within Rate Management.</span></div><div><strong>Templates were fast, but limiting</strong><span>New requirements could require creating entirely new policy types.</span></div><div><strong>Terminology mattered</strong><span>“Minimum transaction price” was difficult to understand.</span></div></div>
      <div className="promotionsStates"><figure><CaseImage src={asset("early-concept.png")} alt="Early promotion configuration concept" /><figcaption>Early concept</figcaption></figure><figure><CaseImage src={asset("final-design.png")} alt="Final promotion configuration design" /><figcaption>Final design</figcaption></figure></div>
      <div className="promotionsCallout"><strong>Templates → Full config → Progressive disclosure</strong><p>Instead of choosing between speed and flexibility, I reorganized the experience around the most common settings while moving less frequently used controls into Advanced Settings.</p></div>
    </section>

    <section className="promotionsSolution">
      <div className="promotionsCopyWide"><h2>Flexible for cities.<br />Seamless for drivers.</h2><div className="promotionsRole"><span>ADMINS</span><strong>Configure the rules without rebuilding the system.</strong><p>Admins could define promotion value, reset behavior, paid-parking behavior, eligibility, location sharing, and other rules through a flexible configuration model.</p></div></div>
      <figure className="promotionsFigure"><CaseImage src={asset("impact-dashboard.png")} alt="Final promotions administration dashboard" /></figure>
      <div className="promotionsConsumer"><span>CONSUMERS</span><strong>Move from promotion to paid parking without starting over.</strong><p>The consumer experience made promotion redemption part of the normal parking flow, removing the need to wait for a promotion to expire or remember another location code.</p></div>
      <div className="promotionsConsumerPhones"><Phone src="impact-mobile-1.png" alt="Promotion configuration in the parking app" /><Phone src="impact-mobile-2.png" alt="Promotion eligibility in the parking app" /><Phone src="impact-mobile-3.png" alt="Promotion redemption in the parking app" /></div>
    </section>

    <section className="promotionsImpact"><h2>From repeated free sessions to zero.</h2><Metrics items={[{ value: "0", label: "duplicate free/discount sessions" }, { value: "100%", label: "platinum cities retained" }, { value: "< 3m", label: "to create a promotion" }, { value: "84", label: "SUS score" }]} /></section>

    <section className="promotionsLearnings"><h2>Flexibility works best when complexity is intentional.</h2><div>{[{ title: "Design for variation", body: "Cities needed different rules, but exposing every configuration equally made setup harder." }, { title: "Progressive disclosure", body: "Common settings stayed accessible while advanced controls remained available when needed." }, { title: "Solve the system", body: "Preventing promotion misuse required coordinating Admin configuration with the consumer redemption experience." }].map(item => <article key={item.title}><strong>{item.title}</strong><p>{item.body}</p></article>)}</div></section>

    <section className="promotionsNext"><div className="promotionsNextHeading"><span>NEXT PROJECT</span><h2>Premier Bays</h2></div><a className="promotionsNextBanner" href="/work/premier-bays"><div><h3>Bringing annual parking into the PayByPhone app for UK motorists.</h3><span>VIEW CASE STUDY →</span></div><img src={asset("next-project.png")} alt="Premier Bays interface preview" /></a></section>
    <Footer />
  </main>;
}
