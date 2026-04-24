import '../styles/page.css';

export default function Speakers() {
  return (
    <div className="page-wrapper">
      
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-tag">Speakers</span>
          <h1>Keynote & Invited Speakers</h1>
          <p>Exciting announcements are on the way. Stay tuned.</p>
        </div>
      </div>

      <div className="page-body">
        
        <div className="speaker-grid">
          
          <div className="speaker-card">
            <div className="speaker-avatar">
              <span style={{ fontSize: '28px' }}>🎤</span>
            </div>
            <span className="speaker-tag invited">Coming Soon</span>
            <div className="speaker-name">To Be Announced</div>
            <div className="speaker-org">Distinguished Speaker</div>
            <div className="speaker-topic">"Details will be revealed shortly"</div>
          </div>

          <div className="speaker-card">
            <div className="speaker-avatar">
              <span style={{ fontSize: '28px' }}>🌐</span>
            </div>
            <span className="speaker-tag keynote">Upcoming</span>
            <div className="speaker-name">To Be Announced</div>
            <div className="speaker-org">Global Expert</div>
            <div className="speaker-topic">"Stay tuned for updates"</div>
          </div>

        </div>

        <div className="page-card" style={{ marginTop: '32px', textAlign: 'center' }}>
          <h2>🚀 Speakers Will Be Announced Soon</h2>
          <p>
            We are curating an exceptional lineup of keynote and invited speakers 
            from academia and industry. Stay connected for updates.
          </p>
        </div>

      </div>
    </div>
  );
}