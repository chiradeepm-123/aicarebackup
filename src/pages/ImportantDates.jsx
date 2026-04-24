import '../styles/page.css';

const dates = [
  { label: 'Paper Submission Deadline',        date: 'October 30, 2026',  status: 'upcoming' },
  { label: 'Call for Papers',                  date: 'April 30, 2026',    status: 'upcoming' },
  { label: 'Final Notification of Acceptance', date: 'December 1, 2026',  status: 'upcoming' },
  { label: 'Registration Deadline',            date: 'January 10, 2027',  status: 'upcoming' },
  { label: 'Camera-Ready Submission',          date: 'January 30, 2027',  status: 'upcoming' },
  { label: 'Conference Dates',                 date: 'March 6–7, 2027',   status: 'upcoming' },
];

export default function ImportantDates() {
  return (
    <div className="page-wrapper">

      {/* HERO */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-tag">Timeline</span>
          <h1>Important Dates</h1>
          <p>All deadlines are at 23:59 IST (Indian Standard Time).</p>
        </div>
      </div>

      <div className="page-body">

        {/* TIMELINE */}
        <div className="page-card">
          <h2>Submission Timeline</h2>

          <div className="timeline">
            {dates.map((item, i) => (
              <div className={`timeline-item ${item.status}`} key={i}>
                <div className="timeline-content">
                  <span className="timeline-label">{item.label}</span>
                  <span className="timeline-date">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NOTES */}
        <div className="page-card">
          <h2>Submission Notes</h2>

          <ul className="page-list">
            <li>Deadlines may be extended — check regularly.</li>
            <li>Late camera-ready papers will not be included.</li>
            <li>All times are in <strong>AoE (UTC−12)</strong>.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}