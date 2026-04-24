import '../styles/page.css';

const earlyBird = [
  { 
    cat: 'Regular Author Academician (UG, PG, PhD, Faculty Members)', // ✅ UPDATED
    ieee: '₹ 8,500', // ✅ UPDATED
    nonIeee: '₹ 9,000' // ✅ UPDATED
  },
  { 
    cat: 'Regular Author from Industry', // ✅ UPDATED
    ieee: '₹ 9,500', // ✅ UPDATED
    nonIeee: '₹ 10,000' // ✅ UPDATED
  },
  { 
    cat: 'Foreign Delegates',
    ieee: 'USD 350', // ✅ UPDATED
    nonIeee: 'USD 400' // ✅ UPDATED
  },
  { 
    cat: 'Only Attending / Accompanying', // ✅ ADDED
    ieee: '₹ 4,000', // ✅ ADDED
    nonIeee: '₹ 4,000' // ✅ ADDED
  },
];

const regularFees = [
  { 
    cat: 'Regular Author Academician (UG, PG, PhD, Faculty Members)', // ✅ UPDATED
    ieee: '₹ 9,000', // ✅ UPDATED
    nonIeee: '₹ 9,500' // ✅ UPDATED
  },
  { 
    cat: 'Regular Author from Industry', // ✅ UPDATED
    ieee: '₹ 10,000', // ✅ UPDATED
    nonIeee: '₹ 10,500' // ✅ UPDATED
  },
  { 
    cat: 'Foreign Delegates',
    ieee: 'USD 400', // ✅ UPDATED
    nonIeee: 'USD 450' // ✅ UPDATED
  },
  { 
    cat: 'Only Attending / Accompanying', // ✅ ADDED
    ieee: '₹ 4,000', // ✅ ADDED
    nonIeee: '₹ 4,000' // ✅ ADDED
  },
];

export default function Registration() {
  return (
    <div className="page-wrapper">
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-tag">Registration</span>
          <h1>Registration</h1>
          <p>AICARE 2027: At least one author must register by 30th August 2025 for inclusion in IEEE Xplore.</p>
        </div>
      </div>

      <div className="page-body">
        {/* Fee Tables */}
        <div className="page-card">
          <h2>Early Bird Registration Fees</h2>
          <div className="reg-table-wrap">
            <table className="reg-table">
              <thead>
                <tr>
                  <th>Author Category</th>
                  <th>IEEE Member</th>
                  <th>Non-IEEE</th>
                </tr>
              </thead>
              <tbody>
                {earlyBird.map((t, i) => (
                  <tr key={i}>
                    <td>{t.cat}</td>
                    <td className="fee-cell">{t.ieee}</td>
                    <td className="fee-cell">{t.nonIeee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 style={{ marginTop: '2rem' }}>Regular Registration Fees</h2>
          <div className="reg-table-wrap">
            <table className="reg-table">
              <thead>
                <tr>
                  <th>Author Category</th>
                  <th>IEEE Member</th>
                  <th>Non-IEEE</th>
                </tr>
              </thead>
              <tbody>
                {regularFees.map((t, i) => (
                  <tr key={i}>
                    <td>{t.cat}</td>
                    <td className="fee-cell">{t.ieee}</td>
                    <td className="fee-cell">{t.nonIeee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Guidelines */}
        <div className="page-card">
          <h2>Registration Guidelines</h2>
          <ul className="page-list">
            <li>IEEE double column format A4 size is mandatory.</li>
            <li>Maximum 20% plagiarism allowed (Turnitin/iThenticate).</li>
            <li>Max page length: 6. Extra pages (max 8) at ₹ 3,000 / $40 per page.</li>
            <li>Registration includes paper submission to IEEE Xplore.</li>
            <li>Registration fee is non-refundable.</li>
            <li>Valid IEEE membership/Student ID is required for verification.</li>
          </ul>
        </div>

        {/* Special Discount */}
        <div className="page-card" style={{ background: '#fdf2f2', border: '1px solid #feb2b2' }}>
          <h2 style={{ color: '#c53030' }}>✨ Special Discount for Women in Engineering</h2>
          <p>We're offering an exclusive discount for women in the engineering field (Student and Non-student).</p>
          <a href="#" style={{ color: '#c53030', fontWeight: 'bold' }}>Learn More About WIE Discount →</a>
        </div>

        {/* Payment Instructions */}
        <div className="page-card">
          <h2>Payment & Invoice Instructions</h2>
          <h3>For Indian Authors:</h3>
          <p>After registering via the portal, email your invoice (PDF) to <strong>aicare@uem.edu.in</strong>.</p>
          <p><em>File Name Format: 123_Payment_Receipt.pdf (123 = CMT number).</em></p>
          
          <h3 style={{ marginTop: '1.5rem' }}>For Foreign Authors (Bank Transfer):</h3>
          <ul className="page-list" style={{ fontSize: '0.9rem' }}>
            <li><strong>Beneficiary:</strong> University of Engineering and Management, Kolkata</li>
            <li><strong>Bank:</strong> Indian Overseas Bank, Sector - V, Salt Lake Branch</li>
            <li><strong>A/c No:</strong> 164201000001924 (Savings)</li>
            <li><strong>IFSC:</strong> IOBA0001642 | <strong>Swift:</strong> IOBAINBB893</li>
          </ul>
          <a href="#" className="page-btn" style={{ marginTop: '16px' }}>Register via Registration Link →</a>
        </div>
      </div>
    </div>
  );
}