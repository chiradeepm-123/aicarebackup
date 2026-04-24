import '../styles/page.css';

const internationalTPC = [
  "Prof. Dr. Sandeep Poddar, Deputy Vice Chancellor (Research & Innovation), Lincoln University College, Malaysia",
  "Dr. Chong Wen Tong, Professor in the Department of Mechanical Engineering, Universiti Malaya",
  "Om B Khadka, Project Lead & IT and Development Expert, HELVETAS Swiss",
  "Dr. Nor Ashidi Mat Isa, Universiti Sains Malaysia, Malaysia",
  "Dr. Vincenzo Piuri, Universita' degli Studi di Milano, Milano, Italy",
  "Dr. Hadj Bourdoucen, Sultan Qaboos University, Oman",
  "Dr. Nathalie Japkowicz, American University, USA",
  "Dr. Erik Cambria, Nanyang Technological University, Singapore",
  "Dr. Michel Plaisent, University of Quebec in Montreal, Canada",
  "Dr. Adam W. Skorek, University of Québec at Trois-Rivières, Canada"
];

export default function InternationalTPC() {
  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-tag">Global Advisory</span>
          <h1>International TPC</h1>
          <p>Collaborating with distinguished international researchers to bring a global perspective to AICARE 2025.</p>
        </div>
      </div>

      <div className="page-body" style={{ maxWidth: '1440px' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))', 
          gap: '24px',
          justifyContent: 'center'
        }}>
          {internationalTPC.map((member, idx) => {
            const [name, ...details] = member.split(',');
            const affiliation = details.join(',').trim();

            return (
              <div 
                className="advisor-card" 
                key={idx} 
                style={{ 
                  margin: 0, 
                  padding: '32px 28px', 
                  textAlign: 'left', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'center',
                  borderTop: '5px solid #1a4a8a',
                  cursor: 'default',
                  height: '100%'
                }}
              >
                <div className="advisor-info">
                  {/* Name: 19px for high readability */}
                  <div 
                    style={{ 
                      fontSize: '19px',
                      fontWeight: '800',
                      fontFamily: "'Barlow Condensed', sans-serif",
                      textTransform: 'uppercase',
                      transition: 'all 0.3s ease',
                      background: 'linear-gradient(90deg, #1a4a8a 0%, #8b5cf6 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'inline-block',
                      marginBottom: '6px',
                      letterSpacing: '0.5px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#8b5cf6';
                      e.currentTarget.style.WebkitTextFillColor = 'transparent';
                      e.currentTarget.style.WebkitBackgroundClip= 'text';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(90deg, #1a4a8a 0%, #8b5cf6 100%)';
                      e.currentTarget.style.WebkitTextFillColor = 'transparent';
                      e.currentTarget.style.WebkitBackgroundClip = 'text';
                    }}
                  >
                    {name.trim()}
                  </div>

                  {/* Signature Yellow Line */}
                  <div style={{
                    height: '3px',
                    width: '40px',
                    background: '#e8a020',
                    margin: '8px 0 16px 0',
                    borderRadius: '2px'
                  }} />

                  {/* Affiliation: 15px for clarity */}
                  <div className="advisor-org" style={{ 
                    fontSize: '15px', 
                    color: '#444', 
                    lineHeight: '1.7',
                    fontWeight: '600'
                  }}>
                    {affiliation}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}