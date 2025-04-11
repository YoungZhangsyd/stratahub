import Link from 'next/link';

const currentEnv = process.env.NEXT_PUBLIC_DEPLOY_ENV;

export default function HomePage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>🏠 Welcome to StrataHub</h1>
      <p>This is the strata management portal.</p>

      {/* 🔗 首页链接导航 */}
      <h2 style={{ marginTop: "1.5rem" }}>🔗 Quick Links:</h2>
      <ul style={{ lineHeight: "2" }}>
        <li><Link href="/committee">👥 Meet the Committee</Link></li>
        <li><Link href="/notices">📢 View Announcements</Link></li>
        <li><Link href="/documents">📄 Download Documents</Link></li>
      </ul>

      {/* 🧭 显示当前部署环境 */}
      <p style={{ marginTop: "2rem", fontStyle: "italic", color: "gray" }}>
        当前环境：
        {currentEnv === 'Production' && '🚀 Production'}
        {currentEnv === 'Preview' && '🔬 Preview'}
        {currentEnv === 'Development' && '🔧 Development'}
        {!currentEnv && '⚠️ no setting environment variable'}
      </p>
    </main>
  );
}

