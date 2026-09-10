import Link from "next/link";
import type { CSSProperties } from "react";
import type { Project } from "@/data/projects";

function ProjectVisual({ project }: { project: Project }) {
  const width = project.visualWidth ?? 420;
  const height = project.visualHeight ?? 350;
  const style = {
    "--visual-width": `${width}px`,
    "--visual-aspect": `${width} / ${height}`,
  } as CSSProperties;

  return (
    <div className="projectVisual">
      <div className={`projectArtwork ${project.title === "Developer Center" ? "projectArtworkDeveloper" : ""}`} style={style}>
        <img src={project.image} alt="" />
      </div>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const light = project.foreground === "light";
  return (
    <Link
      href={project.href}
      className={`projectCard ${light ? "projectCardLight" : "projectCardDark"}`}
      style={{ background: project.background }}
    >
      <ProjectVisual project={project} />
      <div className="projectMeta">
        <h2>{project.title}</h2>
        <p>{project.company} <span>·</span> {project.year}</p>
      </div>
    </Link>
  );
}
