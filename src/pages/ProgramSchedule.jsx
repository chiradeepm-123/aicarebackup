import '../styles/page.css';

export default function ProgramSchedule() {
  return (
    <div className="page-wrapper">
      {/* HERO SECTION */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-tag">Program Schedule</span>
          <h1>Conference Program</h1>
          <p>A comprehensive three-day itinerary of keynotes, technical sessions, and networking excellence.</p>
        </div>
      </div>

      <div className="page-body">
        {/* REVEALING SOON CARD */}
        <div className="page-card shimmer-card" style={{
          minHeight: '400px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(26, 74, 138, 0.1)',
          borderRadius: '16px',
          padding: '40px'
        }}>
          
          {/* Animated Icon Container */}
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #0056b3 0%, #8b5cf6 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '24px',
            boxShadow: '0 10px 20px rgba(139, 92, 246, 0.3)'
          }}>
            <span style={{ fontSize: '32px', color: '#fff' }}>📅</span>
          </div>

          {/* Gradient Text Header */}
          <h2 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: '42px',
            fontWeight: '800',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '12px',
            background: 'linear-gradient(90deg, #0056b3 0%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'inline-block',
            border: 'none' // Removes the bottom line from page.css
          }}>
            Revealing Soon
          </h2>

          {/* Yellow Divider Line */}
          <div style={{
            height: '3px',
            width: '60px',
            background: '#e8a020',
            margin: '0 auto 24px',
            borderRadius: '2px'
          }} />

          <p style={{ 
            fontSize: '18px', 
            color: '#4a6080', 
            maxWidth: '500px', 
            lineHeight: '1.6',
            textAlign: 'center' 
          }}>
            The full sequence of technical sessions, keynote speakers, and gala events is currently being finalized to ensure a world-class experience. 
            <br />
            <strong>Stay tuned for the official announcement.</strong>
          </p>

          {/* Decorative Pulse element */}
          <div style={{
            marginTop: '32px',
            padding: '10px 24px',
            borderRadius: '100px',
            background: 'rgba(139, 92, 246, 0.1)',
            color: '#8b5cf6',
            fontSize: '12px',
            fontWeight: '700',
            letterSpacing: '1.5px',
            textTransform: 'uppercase'
          }} className="pulse-text">
            Finalizing Schedule Beta 1.0
          </div>
        </div>
      </div>
    </div>
  );
}