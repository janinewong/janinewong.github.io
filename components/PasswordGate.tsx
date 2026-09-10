"use client";
import { FormEvent, useState } from "react";

export function PasswordGate({ next }: { next: string }) {
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setError("");
    const password = new FormData(event.currentTarget).get("password");
    try {
      const response = await fetch("/api/case-study-access", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password, next }) });
      const result = await response.json();
      if (!response.ok) { setError(result.error); setBusy(false); return; }
      window.location.assign(result.next);
    } catch { setError("Unable to connect. Please try again."); setBusy(false); }
  }
  return <main className="passwordBackdrop"><section className="passwordCard" aria-labelledby="passwordTitle">
    <a className="passwordClose" href="/" aria-label="Back to portfolio">×</a>
    <h1 id="passwordTitle">This work is password protected.</h1>
    <form method="post" action="/api/case-study-access" onSubmit={submit}>
      <label htmlFor="casePassword">Enter password</label>
      <div className="passwordRow"><input autoFocus required id="casePassword" name="password" type="password" autoComplete="current-password" maxLength={256} aria-invalid={!!error} aria-describedby={error ? "passwordError" : undefined} /><button disabled={busy}>{busy ? "Opening…" : "Enter →"}</button></div>
      {error && <p id="passwordError" className="passwordError" role="alert">{error}</p>}
    </form>
  </section></main>;
}
