import '../styles/page.css';

const committeeData = [
  { members: [{ name: 'Prof. Banani Chakrabarty', role: 'Chief Patron' }] },
  { members: [
      { name: 'Prof. Dr. Satyajit Chakrabarty', role: 'Patron' },
      { name: 'Prof. Dr. Kamakhya Prasad Ghatak', role: 'Co-Patron' },
      { name: 'Prof. Dr. Sukalyan Goswami', role: 'Co-Patron' },
      { name: 'Prof. Dr. Abir Chattapadhyay', role: 'Co-Patron' },
  ]},
  { members: [
      { name: 'Prof. Dr. Emilia Balas Valentina', role: 'General Chair' },
      { name: 'Prof. Dr. Sudipta Basu Pal', role: 'Conference Chair' },
      { name: 'Prof. Dr. Rajashree Paul', role: 'Convener' },
      { name: 'Prof. Dr. Anirban Das', role: 'Organizing Chair' },
      { name: 'Prof. Sujata Ghatak', role: 'Organizing Co-Chair' },
  ]},
  { members: [
      { name: 'Prof. Dr. Chiradeep Mukherjee', role: 'TPC Chair' },
      { name: 'Prof. Dr. Arnab Ghosh', role: 'Publication Chair' },
      { name: 'Prof. Dr. Maumita Das', role: 'TPC Co-Chair' },
      { name: 'Prof. Dr. Koustov Mondal', role: 'TPC Co-Chair' },
  ]},
  { members: [
      { name: 'Prof. Dr. Tanay Pramanik', role: 'Publicity Chair' },
      { name: 'Prof. Dr. Sayantan Sil', role: 'Finance Chair' },
      { name: 'Prof. Dr. Abhishek Haldar', role: 'Hospitality Chair' },
      { name: 'Prof. Dr. Goutam Dalapati', role: 'Industry Chair', org: 'CEO - Sunkonnect, Singapore' },
  ]}
];

export default function OrganizingCommittee() {
  return (
    <div className="page-wrapper" style={{ position: 'relative', backgroundColor: '#fdfdfd' }}>
      
      {/* AICARE WATERMARK BACKGROUND */}
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.04, // Very low opacity for a shadow effect
        width: '60vw',
        height: '60vw',
       backgroundImage: 'url("/aicare.png")',// Make sure this path is correct in your public folder
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'grayscale(100%)' // Keeps it neutral and classic
      }} />

      {/* MINIMAL DOT PATTERN */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
        pointerEvents: 'none',
        backgroundImage: 'radial-gradient(#d1d9e6 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        opacity: 0.3
      }} />

      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-tag">AICARE Committee</span>
          <h1>Organizing Committee</h1>
          <p>Collaborating across disciplines to ensure excellence in research and innovation.</p>
        </div>
      </div>

      <div className="page-body" style={{ position: 'relative', zIndex: 2 }}>
        {committeeData.map((group, idx) => (
          <div key={idx} style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '24px', 
            marginBottom: '32px' 
          }}>
            {group.members.map((m, mIdx) => (
              <div 
                className="advisor-card" 
                key={mIdx} 
                style={{ 
                  flex: '0 1 320px',
                  padding: '24px',
                  textAlign: 'center',
                  cursor: 'default',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)', // Glass-like transparency
                  borderTop: '4px solid #0056b3'
                }}
              >
                <div className="advisor-info">
                  <div 
                    style={{ 
                      fontSize: '18px',
                      fontWeight: '700',
                      fontFamily: "'Barlow Condensed', sans-serif",
                      textTransform: 'uppercase',
                      transition: 'all 0.3s ease',
                      background: 'linear-gradient(90deg, #0056b3 0%, #8b5cf6 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'inline-block'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'none';
                      e.currentTarget.style.WebkitTextFillColor = '#8b5cf6';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(90deg, #0056b3 0%, #8b5cf6 100%)';
                      e.currentTarget.style.WebkitTextFillColor = 'transparent';
                      e.currentTarget.style.WebkitBackgroundClip = 'text';
                    }}
                  >
                    {m.name}
                  </div>

                  <div style={{
                    height: '2px',
                    width: '30px',
                    background: '#e8a020',
                    margin: '10px auto',
                    borderRadius: '2px'
                  }} />

                  <div className="advisor-title" style={{ fontSize: '14px', fontWeight: 600, color: '#1a4a8a' }}>
                    {m.role}
                  </div>
                  
                  {m.org && (
                    <div className="advisor-org" style={{ marginTop: '4px', fontSize: '12px', color: '#666' }}>
                      {m.org}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}