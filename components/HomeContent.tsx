import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export function HomeContent() {
  return (
    <main>
      <Header active="work" />

      <section className="heroIntro">
        <h1>Hola! I’m Janine 👋</h1>
        <p>
          Senior UX Designer at Amazon, designing systems and tools that make selling a little less stressful.
        </p>
      </section>

      <section id="work" className="projectGridSection" aria-label="Selected work">
        <div className="projectGrid">
          {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </section>

      <Footer />
    </main>
  );
}
