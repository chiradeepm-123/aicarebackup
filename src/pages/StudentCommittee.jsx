import '../styles/page.css';

const studentData = [
  { name: 'Soumyo Mukherjee', role: 'Senior Student Member' },
  { name: 'Soumya Biswas', role: 'Student Member' },
  { name: 'Sourin De', role: 'Student Member' },
];

export default function StudentSupport() {
  return (
    <div className="page-wrapper" style={{ backgroundColor: '#ffffff' }}>
      <div className="page-hero" style={{ background: '#000000', padding: '80px 60px' }}>
        <div className="page-hero-inner">
          <span className="page-tag" style={{ 
            color: '#ffffff', 
            borderColor: 'rgba(255,255,255,0.4)', 
            background: 'transparent',
            letterSpacing: '3px' 
          }}>
            Support Executive
          </span>
          <h1 style={{ color: '#ffffff', textTransform: 'uppercase', fontWeight: '800' }}>
            Student Committee
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)' }}>
            Technical and operational support for AICARE 2025.
          </p>
        </div>
      </div>

      <div className="page-body">
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '40px' 
        }}>
          {studentData.map((m, idx) => (
            <div 
              key={idx} 
              style={{ 
                flex: '0 1 320px',
                padding: '40px 20px',
                textAlign: 'center',
                border: '1px solid #e0e0e0',
                borderRadius: '0px', // Classic sharp corners
                backgroundColor: '#ffffff',
                transition: 'none' // Zero animation
              }}
            >
              <div className="advisor-info">
                {/* Name: Pure Black, Bold, Classic Typography */}
                <div 
                  style={{ 
                    fontSize: '20px',
                    fontWeight: '700',
                    fontFamily: "'Barlow Condensed', sans-serif",
                    textTransform: 'uppercase',
                    color: '#000000',
                    display: 'block',
                    letterSpacing: '1.5px',
                    marginBottom: '15px'
                  }}
                >
                  {m.name}
                </div>

                {/* Minimalist Black Divider */}
                <div style={{
                  height: '1px',
                  width: '40px',
                  background: '#000000',
                  margin: '0 auto 15px',
                }} />

                {/* Role: Simple, clean, high-contrast */}
                <div style={{ 
                  fontSize: '12px', 
                  fontWeight: '600', 
                  color: '#666666',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                }}>
                  {m.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}