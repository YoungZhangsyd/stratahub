const currentEnv = process.env.NEXT_PUBLIC_DEPLOY_ENV;

export default function HomePage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>🏠 Welcome to StrataHub</h1>
      <p>This is the strata management portal.</p>

      {/* 显示当前运行环境 */}
      <p style={{ marginTop: "2rem", fontStyle: "italic", color: "gray" }}>
        当前环境：
        {currentEnv === 'Production' && '🚀 Production'}
        {currentEnv === 'Preview' && '🔬 Preview'}
        {currentEnv === 'Development' && '🔧 Development'}
        {!currentEnv && '⚠️ 未设置环境变量'}
      </p>
    </main>
  );
}
