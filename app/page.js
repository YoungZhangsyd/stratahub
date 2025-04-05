import Image from "next/image";

export default function Home() {
    return (
      <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <h1>🏢 Welcome to Smart Strata NSW</h1>
        <p>
          This website is built to assist in managing a strata-titled apartment building in New South Wales,
          in line with the <strong>Strata Schemes Management Act (2015)</strong>.
        </p>
  
        <section style={{ marginTop: '2rem' }}>
          <h2>👥 Strata Committee Members</h2>
          <ul>
            <li><strong>Chairperson:</strong> Alex Johnson</li>
            <li><strong>Secretary:</strong> Maria Chen</li>
            <li><strong>Treasurer:</strong> David Lee</li>
            <li>Committee Member: Sarah Wong</li>
            <li>Committee Member: John Patel</li>
          </ul>
          <p>Up to 9 members can be elected to the committee.</p>
        </section>
  
        <section style={{ marginTop: '2rem' }}>
          <h2>💰 Financial Overview</h2>
          <p>
            Owners contribute levies into two funds:
            <ul>
              <li><strong>Administrative Fund</strong> – for daily building maintenance, cleaning, and insurance.</li>
              <li><strong>Capital Works Fund</strong> – for major repairs and improvements.</li>
            </ul>
          </p>
        </section>
  
        <section style={{ marginTop: '2rem' }}>
          <h2>📄 Resources</h2>
          <a href="/docs/strata_rules.pdf" download>
            📥 Download: Strata Rules & Responsibilities
          </a>
        </section>
      </main>
    )
  }
  