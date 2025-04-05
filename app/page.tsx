import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>🏠 Welcome to StrataHub</h1>
      <p>This is your homepage deployed on Vercel.</p>

      <h2 style={{ marginTop: "1.5rem" }}>🔗 Quick Links:</h2>
      <ul style={{ lineHeight: "2" }}>
        <li><Link href="/committee">👥 Meet the Committee</Link></li>
        <li><Link href="/notices">📢 View Announcements</Link></li>
        <li><Link href="/documents">📄 Download Documents</Link></li>
      </ul>
    </main>
  );
}
  