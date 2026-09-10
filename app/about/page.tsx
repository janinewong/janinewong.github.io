import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function AboutPage() {
  return (
    <main>
      <Header active="about" />
      <section className="aboutPage" aria-labelledby="aboutTitle">
        <h1 id="aboutTitle">Bits about me</h1>
        <p className="aboutLead">
          A product designer who enjoys creating delightful experiences with data. Insights drive what I do, how I do it, and why the work holds up.
        </p>
        <div className="aboutGrid">
          <article>
            <img src="/images/about/janine-amazon.jpeg" alt="Janine standing in a field" />
            <div>
              <h2>Senior UX Designer, Amazon</h2>
              <p>I&apos;m part of the team building design systems that make selling less stressful for Amazon sellers.</p>
            </div>
          </article>
          <article>
            <img src="/images/about/maru.jpeg" alt="Janine holding Maru, her Shiba Inu" />
            <div>
              <h2>Nail artist</h2>
              <p>I love expressing myself through my nails! Ask me what&apos;s on my nails :)</p>
            </div>
          </article>
          <article>
            <img src="/images/about/nail-art.jpeg" alt="Janine's nail art over dried flowers" />
            <div>
              <h2>Doge owner</h2>
              <p>Proud girl mom of my sweet 3 year old Shiba, Maru.</p>
            </div>
          </article>
        </div>
      </section>
      <Footer />
    </main>
  );
}
