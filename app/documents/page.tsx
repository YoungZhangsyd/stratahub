export default function DocumentsPage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>📄 Documents</h1>
      <p>You can download important building documents below:</p>
      <ul>
        <li>
          <a href="/docs/strata_rules.pdf" download>📥 Strata Rules PDF</a>
        </li>
        <li>
          <a href="/docs/meeting_minutes.pdf" download>📥 Committee Meeting Minutes</a>
        </li>
      </ul>
    </main>
  );
}


