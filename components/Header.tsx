import Link from "next/link";

export function Header({ active }: { active?: "work" | "about" }) {
  return (
    <header className="siteHeader">
      <Link className="brand" href="/">Janine Wong</Link>
      <nav className="nav" aria-label="Primary navigation">
        <Link className={active === "work" ? "navActive" : undefined} aria-current={active === "work" ? "page" : undefined} href="/#work">Work</Link>
        <Link className={active === "about" ? "navActive" : undefined} aria-current={active === "about" ? "page" : undefined} href="/about">About</Link>
        <a href="/JanineWong_Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        <a className="contactButton" href="mailto:jaeninwong@gmail.com">Get in touch</a>
      </nav>
    </header>
  );
}
