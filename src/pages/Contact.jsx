import '../styles/page.css';
import { useState } from 'react';

const CONTACTS = [
  { name: 'Dr. Sudipta Basu Pal',    email: 'sudipta.basupal@uem.edu.in',     role: 'Conference Chair'  },
  { name: 'Dr. Chiradeep Mukherjee', email: 'chiradeep.mukherjee@uem.edu.in', role: 'Technical Program Committee (TPC) Chair'  },
  { name: 'Dr. Arnab Ghosh',         email: 'arnab.ghosh1@uem.edu.in',         role: 'Sponsorship'        },
];

const SUBJECTS = [
  'Paper Submission',
  'Registration & Fees',
  'Sponsorship',
  'Venue & Accommodation',
  'Program Schedule',
  'General Enquiry',
];

function validate(form) {
  const e = {};
  if (!form.name.trim())                               e.name    = 'Name is required.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email   = 'Enter a valid email address.';
  if (!form.subject)                                   e.subject = 'Please select a subject.';
  if (form.message.trim().length < 20)                 e.message = 'Message must be at least 20 characters.';
  return e;
}

export default function Contact() {
  const [form,   setForm]   = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent

  const handle = (e) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    if (errors[name]) setErrors(er => ({ ...er, [name]: '' }));
  };

  const submit = (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 1600);
  };

  const reset = () => {
    setForm({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setStatus('idle');
  };

  const errorStyle  = { fontSize: '12px', color: '#d9534f', marginTop: '4px', fontWeight: 600 };
  const invalidBorder = { borderColor: '#d9534f', boxShadow: '0 0 0 3px rgba(217,83,79,0.12)' };
  const charCount   = { fontSize: '12px', color: '#aaa', textAlign: 'right', marginTop: '3px' };
  const spinnerWrap = { display: 'inline-flex', alignItems: 'center', gap: '8px' };

  return (
    <div className="page-wrapper">

      {/* HERO */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-tag">Contact</span>
          <h1>Get in Touch</h1>
          <p>Reach out to the AICARE 2025 organizing committee — we're happy to help.</p>
        </div>
      </div>

      <div className="page-body">
        <div className="contact-layout">

          {/* LEFT: INFO */}
          <div className="page-card contact-details">

            <h2>Conference Chair</h2>
            <div className="contact-list" style={{ marginBottom: '20px' }}>
              <div className="contact-item">
                <span>🎓</span>
                <div>
                  <strong style={{ fontSize: '15.5px', color: '#1a3a6a', display: 'block' }}>
                    Dr. Sudipta Basu Pal
                  </strong>
                  <span style={{ fontSize: '13px', color: '#0056b3', fontWeight: 600 }}>
                    Conference Chair, AICARE 2025
                  </span>
                </div>
              </div>

              {/* Address */}
              <div className="contact-item">
                <span>📍</span>
                <a
                  href="https://www.google.com/maps/search/University+Area,+Plot+No.+III+%E2%80%93+B%2F5,+New+Town,+Action+Area+%E2%80%93+III,+Kolkata,+West+Bengal+700160"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#0056b3', textDecoration: 'none', fontSize: '14px', lineHeight: 1.65 }}
                  onMouseEnter={e => e.target.style.textDecoration = 'underline'}
                  onMouseLeave={e => e.target.style.textDecoration = 'none'}
                >
                  University Area, Plot No. III – B/5, New Town,
                  Action Area – III, Kolkata, West Bengal 700160
                </a>
              </div>
            </div>

            {/* Contacts */}
            <div style={{ borderTop: '1px solid #e0e8f0', paddingTop: '20px' }}>
              <p style={{
                fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px',
                textTransform: 'uppercase', color: '#aab', marginBottom: '14px'
              }}>
                For details, contact:
              </p>

              <div className="contact-list">
                {CONTACTS.map((c, i) => (
                  <div className="contact-item" key={i}>
                    <span>👤</span>
                    <div style={{ minWidth: 0 }}>
                      <strong style={{ fontSize: '14.5px', color: '#1a3a6a', display: 'block' }}>
                        {c.name}
                      </strong>
                      <span style={{
                        fontSize: '11px', fontWeight: 700, letterSpacing: '0.8px',
                        textTransform: 'uppercase', color: '#0056b3', display: 'block', margin: '2px 0'
                      }}>
                        {c.role}
                      </span>
                      <a
                        href={`mailto:${c.email}`}
                        style={{ fontSize: '13px', color: '#0056b3', textDecoration: 'none', wordBreak: 'break-all' }}
                        onMouseEnter={e => e.target.style.textDecoration = 'underline'}
                        onMouseLeave={e => e.target.style.textDecoration = 'none'}
                      >
                        {c.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* General inbox */}
            <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid #e0e8f0' }}>
              <a href="mailto:aicare@uem.edu.in" className="page-btn" style={{ width: '100%', justifyContent: 'center' }}>
                ✉  aicare@uem.edu.in
              </a>
            </div>

          </div>

          {/* RIGHT: FORM */}
          <div className="page-card">
            <h2>Send a Message</h2>
            <p style={{ marginBottom: '24px', color: '#777', fontSize: '14px' }}>
              We typically respond within 1–2 business days.
            </p>

            {status === 'sent' ? (
              <div>
                <div className="success-msg">
                  ✅  Your message has been sent! A member of our team will be in touch shortly.
                </div>
                <button onClick={reset} className="page-btn outline" style={{ marginTop: '18px' }}>
                  ↩  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="cf-name">Full Name *</label>
                    <input
                      id="cf-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handle}
                      placeholder="Your full name"
                      autoComplete="off"
                      style={errors.name ? invalidBorder : {}}
                    />
                    {errors.name && <span style={errorStyle}>{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="cf-email">Email Address *</label>
                    <input
                      id="cf-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handle}
                      placeholder="your@email.com"
                      autoComplete="off"
                      style={errors.email ? invalidBorder : {}}
                    />
                    {errors.email && <span style={errorStyle}>{errors.email}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="cf-subject">Subject *</label>
                  <select
                    id="cf-subject"
                    name="subject"
                    value={form.subject}
                    onChange={handle}
                    style={{
                      border: `1.5px solid ${errors.subject ? '#d9534f' : '#c6d8f0'}`,
                      borderRadius: '6px',
                      padding: '10px 14px',
                      fontSize: '14px',
                      color: form.subject ? '#333' : '#888',
                      background: '#f8fbff',
                      fontFamily: 'inherit',
                      width: '100%',
                      cursor: 'pointer',
                      ...(errors.subject ? { boxShadow: '0 0 0 3px rgba(217,83,79,0.12)' } : {}),
                    }}
                  >
                    <option value="" disabled>Select a subject…</option>
                    {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.subject && <span style={errorStyle}>{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="cf-message">Message *</label>
                  <textarea
                    id="cf-message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handle}
                    placeholder="Write your message here…"
                    maxLength={1000}
                    style={errors.message ? invalidBorder : {}}
                  />
                  {errors.message && <span style={errorStyle}>{errors.message}</span>}
                  <div style={charCount}>{form.message.length} / 1000</div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', paddingTop: '4px' }}>
                  <span style={{ fontSize: '12px', color: '#aaa', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    🔒 Your information is kept confidential.
                  </span>
                  <button
                    type="submit"
                    className="page-btn"
                    disabled={status === 'sending'}
                    style={{ opacity: status === 'sending' ? 0.75 : 1, cursor: status === 'sending' ? 'not-allowed' : 'pointer' }}
                  >
                    {status === 'sending' ? (
                      <span style={spinnerWrap}>
                        <span style={{
                          display: 'inline-block', width: '13px', height: '13px',
                          border: '2px solid rgba(255,255,255,0.35)',
                          borderTopColor: '#fff', borderRadius: '50%',
                          animation: 'cfSpin 0.7s linear infinite'
                        }} />
                        Sending…
                      </span>
                    ) : (
                      'Send Message →'
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`@keyframes cfSpin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}