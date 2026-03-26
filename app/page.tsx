export default function Home() {
  return (
    <main style={{ 
      backgroundColor: '#0a0a0a', 
      color: '#ededed', 
      minHeight: '100vh', 
      padding: '40px',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <header style={{ borderBottom: '1px solid #333', paddingBottom: '20px' }}>
        <h1 style={{ fontSize: '2rem', letterSpacing: '-0.05em' }}>THE DATA BASE</h1>
        <p style={{ color: '#888' }}>Autonomous Agentic Stack | v0.1.0</p>
      </header>

      <section style={{ marginTop: '40px', display: 'grid', gap: '20px' }}>
        <div style={{ padding: '20px', border: '1px solid #333', borderRadius: '8px' }}>
          <h2 style={{ fontSize: '1.2rem', color: '#a855f7' }}>System Status</h2>
          <p>Orchestrator: Initialized</p>
          <p>Flywheel: Waiting for input...</p>
        </div>
        
        <div style={{ padding: '20px', border: '1px solid #333', borderRadius: '8px', color: '#666' }}>
          <p>Connect Supabase to begin data ingestion.</p>
        </div>
      </section>
    </main>
  );
}
