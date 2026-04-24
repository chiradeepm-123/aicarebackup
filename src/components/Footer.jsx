import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Scrolls window to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

export default function Footer() {
  return (
    <>
      <ScrollToTop />
      <footer className="footer">
        <div className="footer-grid">

          {/* Col 1 — Brand */}
          <div>
            <h5>AICARE 2027</h5>
            <p>
              Integrating Artificial Intelligence with Computing, Astronomy, and Renewable
              Energy to optimize resources and explore sustainable technology for a harmonious
              coexistence of humanity and nature.
            </p>
            <p style={{ marginTop: 12 }}>
              <strong style={{ color: '#fff' }}>Conference Record ID:</strong> xxxxx<br />
              <strong style={{ color: '#fff' }}>Dates:</strong> November 21–22, 2027<br />
              <strong style={{ color: '#fff' }}>Venue:</strong> UEM Kolkata, New Town
            </p>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <h5>Quick Links</h5>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/call-for-papers/submission">Call for Papers</Link></li>
              <li><Link to="/committee/organizing">Committee</Link></li>
              <li><Link to="/speakers">Speakers</Link></li>
              <li><Link to="/submission">Submission</Link></li>
              <li><Link to="/registration">Registration</Link></li>
              <li><Link to="/venue">Venue</Link></li>
              <li><Link to="/program-schedule">Program Schedule</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h5>Contact Us</h5>
            <p>University of Engineering &amp; Management, Kolkata</p>
            <p style={{ marginTop: 8 }}>
              Plot III-B/5, Newtown, Action Area III,<br />
              Kolkata – 700 160, West Bengal, India
            </p>
            <p style={{ marginTop: 8 }}>
              📧 <a href="mailto:aicare2027@uem.edu.in">aicare2027@uem.edu.in</a>
            </p>
            <p style={{ marginTop: 4 }}>
              🌐 <a href="https://aicare.uem.edu.in" target="_blank" rel="noreferrer">aicare.uem.edu.in</a>
            </p>
            <div style={{ marginTop: 16 }}>
              
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          Copyright &copy; 2027 AICARE | University of Engineering &amp; Management, Kolkata.
          All Rights Reserved.
        </div>
      </footer>
    </>
  );
}