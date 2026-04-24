import '../styles/page.css';

export default function ConferenceTracksStyled() {
  return (
    <div className="page-wrapper">

      {/* HERO */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-tag">AICARE 2025</span>
          <h1>Conference Tracks</h1>
          <p style={{ color: '#f5b83d' }}>
            Explore the four major tracks of AICARE 2025 and discover the latest advancements in AI
          </p>
        </div>
      </div>

      {/* Made the body wider to utilize screen space */}
      <div className="page-body" style={{ maxWidth: '1300px' }}>

        {/* Using your venue-layout class for perfect 2-col desktop / 1-col mobile */}
        <div className="venue-layout" style={{ marginBottom: '32px' }}>

          {/* TRACK 1 */}
          <div className="page-card" style={{ margin: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span style={{ backgroundColor: '#1a4a8a', color: '#fff', padding: '4px 12px', borderRadius: '4px', fontWeight: 'bold', fontSize: '1.2rem' }}>1</span>
              <h2 style={{ color: '#1a4a8a', margin: 0, border: 'none', padding: 0 }}>Applications of AI in Computing</h2>
            </div>
            
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000" 
              alt="AI in Computing" 
              style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px', marginBottom: '20px' }} 
            />

            <h3 style={{ color: '#333', fontSize: '1.1rem', marginBottom: '8px' }}>
              Research Topics <span style={{ fontSize: '0.9rem', color: '#666', fontWeight: 'normal' }}>(19 topics)</span>
            </h3>
            
            {/* Using your topic-grid and topic-chip to save vertical space */}
            <div className="topic-grid">
              <span className="topic-chip">Machine Learning and Deep Learning Innovations</span>
              <span className="topic-chip">Natural Language Processing Applications</span>
              <span className="topic-chip">AI in Cybersecurity</span>
              <span className="topic-chip">Ethics and Fairness in AI</span>
              <span className="topic-chip">AI for Fog Computing</span>
              <span className="topic-chip">AI in Cloud Computing</span>
              <span className="topic-chip">AI for Edge Computing</span>
              <span className="topic-chip">Reinforcement Learning Techniques</span>
              <span className="topic-chip">Computer Vision and Image Processing</span>
              <span className="topic-chip">Explainable AI (XAI)</span>
              <span className="topic-chip">AI for IIoT</span>
              <span className="topic-chip">Data Privacy and AI</span>
              <span className="topic-chip">AI-Driven Software Engineering</span>
              <span className="topic-chip">AI in Robotics and Automation</span>
              <span className="topic-chip">Augmented Reality and AI</span>
              <span className="topic-chip">AI for Predictive Analytics</span>
              <span className="topic-chip">AI in Healthcare Computing</span>
              <span className="topic-chip">Quantum Computing and AI</span>
              <span className="topic-chip">AI for Resource Optimization</span>
            </div>
          </div>

          {/* TRACK 2 */}
          <div className="page-card" style={{ margin: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span style={{ backgroundColor: '#1a4a8a', color: '#fff', padding: '4px 12px', borderRadius: '4px', fontWeight: 'bold', fontSize: '1.2rem' }}>2</span>
              <h2 style={{ color: '#1a4a8a', margin: 0, border: 'none', padding: 0 }}>UAV Networks</h2>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80&w=1000" 
              alt="UAV Networks" 
              style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px', marginBottom: '20px' }} 
            />

            <h3 style={{ color: '#333', fontSize: '1.1rem', marginBottom: '8px' }}>
              Research Topics <span style={{ fontSize: '0.9rem', color: '#666', fontWeight: 'normal' }}>(21 topics)</span>
            </h3>
            
            <div className="topic-grid">
              <span className="topic-chip">Autonomous Navigation and Flight Control</span>
              <span className="topic-chip">Computer Vision for Smart UAVs</span>
              <span className="topic-chip">Object Detection and Tracking</span>
              <span className="topic-chip">Swarm Intelligence</span>
              <span className="topic-chip">Environmental Monitoring</span>
              <span className="topic-chip">Precision Agriculture</span>
              <span className="topic-chip">Data Processing for UAV Imagery</span>
              <span className="topic-chip">Ethics and Regulations</span>
              <span className="topic-chip">Search and Rescue Operations</span>
              <span className="topic-chip">Security Challenges & AI Solutions</span>
              <span className="topic-chip">UAV-enabled IoT Use Cases</span>
              <span className="topic-chip">IoT Swarming Coordination</span>
              <span className="topic-chip">Data Collection & Analytics</span>
              <span className="topic-chip">UAV-enabled MEC Architectures</span>
              <span className="topic-chip">Computation Offloading</span>
              <span className="topic-chip">Trajectory Design</span>
              <span className="topic-chip">Spectrum Management</span>
              <span className="topic-chip">Green Energy UAV Networks</span>
              <span className="topic-chip">MIMO / Millimeter Wave</span>
              <span className="topic-chip">Quality of Service</span>
              <span className="topic-chip">Network Security</span>
            </div>
          </div>

          {/* TRACK 3 */}
          <div className="page-card" style={{ margin: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span style={{ backgroundColor: '#1a4a8a', color: '#fff', padding: '4px 12px', borderRadius: '4px', fontWeight: 'bold', fontSize: '1.2rem' }}>3</span>
              <h2 style={{ color: '#1a4a8a', margin: 0, border: 'none', padding: 0 }}>Astronomy</h2>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=1000" 
              alt="Astronomy" 
              style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px', marginBottom: '20px' }} 
            />

            <h3 style={{ color: '#333', fontSize: '1.1rem', marginBottom: '8px' }}>
              Research Topics <span style={{ fontSize: '0.9rem', color: '#666', fontWeight: 'normal' }}>(21 topics)</span>
            </h3>
            
            <div className="topic-grid">
              <span className="topic-chip">Astrophysical Data Analysis</span>
              <span className="topic-chip">Star Formation</span>
              <span className="topic-chip">Nucleosynthesis</span>
              <span className="topic-chip">Solar Astrophysics</span>
              <span className="topic-chip">Image Processing</span>
              <span className="topic-chip">Exoplanet Detection</span>
              <span className="topic-chip">Time Series Analysis</span>
              <span className="topic-chip">Telescope Automation</span>
              <span className="topic-chip">Big Data Challenges</span>
              <span className="topic-chip">Cosmic Phenomena Simulations</span>
              <span className="topic-chip">Galaxy Evolution</span>
              <span className="topic-chip">Galaxy Classification</span>
              <span className="topic-chip">Radio Astronomy</span>
              <span className="topic-chip">Gravitational Wave Detection</span>
              <span className="topic-chip">Stellar Evolution</span>
              <span className="topic-chip">Large Astronomical Surveys</span>
              <span className="topic-chip">Cosmological Modelling</span>
              <span className="topic-chip">Space Mission Planning</span>
              <span className="topic-chip">Anomaly Detection</span>
              <span className="topic-chip">Visualization Techniques</span>
              <span className="topic-chip">Quantum Computing in Astronomy</span>
            </div>
          </div>

          {/* TRACK 4 */}
          <div className="page-card" style={{ margin: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <span style={{ backgroundColor: '#1a4a8a', color: '#fff', padding: '4px 12px', borderRadius: '4px', fontWeight: 'bold', fontSize: '1.2rem' }}>4</span>
              <h2 style={{ color: '#1a4a8a', margin: 0, border: 'none', padding: 0 }}>Renewable Energy</h2>
            </div>

            <img 
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1000" 
              alt="Renewable Energy" 
              style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '8px', marginBottom: '20px' }} 
            />

            <h3 style={{ color: '#333', fontSize: '1.1rem', marginBottom: '8px' }}>
              Research Topics <span style={{ fontSize: '0.9rem', color: '#666', fontWeight: 'normal' }}>(20 topics)</span>
            </h3>
            
            <div className="topic-grid">
              <span className="topic-chip">Energy Forecasting</span>
              <span className="topic-chip">Smart Grid Management</span>
              <span className="topic-chip">Predictive Maintenance</span>
              <span className="topic-chip">Energy Storage Solutions</span>
              <span className="topic-chip">Solar Energy Performance</span>
              <span className="topic-chip">Wind Energy Prediction</span>
              <span className="topic-chip">Electric Vehicle Integration</span>
              <span className="topic-chip">Decentralized Management</span>
              <span className="topic-chip">Energy Demand Response</span>
              <span className="topic-chip">Solar Panel Inspection</span>
              <span className="topic-chip">Building Energy Efficiency</span>
              <span className="topic-chip">Green Energy Technologies</span>
              <span className="topic-chip">Hydropower Generation</span>
              <span className="topic-chip">Renewable Energy Microgrids</span>
              <span className="topic-chip">Environmental Impact Assessment</span>
              <span className="topic-chip">Climate Change Mitigation</span>
              <span className="topic-chip">AI and IoT Monitoring</span>
              <span className="topic-chip">Smart System Design</span>
              <span className="topic-chip">Data-Driven Policy Making</span>
              <span className="topic-chip">Next-Generation Technologies</span>
            </div>
          </div>

        </div>

        {/* BEST STUDENT PAPER AWARD */}
        <div className="page-card" style={{ borderTop: '4px solid #f5b83d', backgroundColor: '#fffdf5' }}>
          <h2 style={{ color: '#1a4a8a', marginBottom: '12px', border: 'none', padding: 0 }}>Best Student Paper Award</h2>
          <p>
            There will be <strong>three (3) best student paper awards</strong> in three different tracks. A paper will be considered a student paper if <strong>all the authors are students only</strong>. Otherwise, a full registration fee is applicable.
          </p>
        </div>

        {/* DOWNLOAD RESOURCES */}
        <div className="page-card" style={{ borderTop: '4px solid #0056b3' }}>
          <h2 style={{ color: '#1a4a8a', marginBottom: '12px', border: 'none', padding: 0 }}>Download Resources</h2>
          <p style={{ marginBottom: '20px' }}>
            Get detailed information about the conference tracks and event materials
          </p>
          
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <button 
              className="page-btn" 
              onClick={() => alert('coming soon')}
            >
              Conference Tracks - Print or Save as PDF
            </button>

            <button 
              className="page-btn outline" 
              onClick={() => alert('coming soon')}
            >
              Event Brochure - Download PDF
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}