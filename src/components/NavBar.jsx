import { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  {
    label: 'About Us',
    children: [
      { label: 'University of Engineering & Management, Kolkata', path: '/about/university' },
      { label: 'Centre of Excellence in Renewable Energy',        path: '/about/renewable-energy' },
      { label: 'Centre of Excellence in Astronomical Studies, UEMK', path: '/about/astronomy' },
    ],
  },
  {
    label: 'Call For Papers',
    children: [
      { label: 'Paper Submission', path: '/call-for-papers/submission' },
      { label: 'Important Dates',  path: '/call-for-papers/dates' },
      { label: 'Track of Conference', path: '/call-for-papers/tracks' },
      { label: 'Presentation Guidelines', path: '/call-for-papers/presentation-guidelines' },
    ],
  },
  {
    label: 'Committee',
    children: [
      { label: 'Organizing Committee',        path: '/committee/organizing' },
      { label: 'Technical Program Committee', path: '/committee/technical' },
      { label: 'National Advisory Committee ',              path: '/committee/advisory' },
      { label: 'International Advisory Committee', path: '/committee/international-advisory' },
      { label: 'Student Committee', path: '/committee/student' },
    ],
  },
  { label: 'Speakers',         path: '/speakers' },
  { label: 'Registration',     path: '/registration' },
  { label: 'Venue',            path: '/venue' },
  { label: 'Program Schedule', path: '/program-schedule' },
  { label: 'Contact',          path: '/contact' },
];

function Dropdown({ item, currentPath }) {
  const [open, setOpen] = useState(false);
  const closeTimer      = useRef(null);
  const ref             = useRef(null);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  }, []);

  useEffect(() => () => cancelClose(), [cancelClose]);

  useEffect(() => {
    const handler = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const isActive = item.children.some(c => currentPath.startsWith(c.path));

  return (
    <div
      ref={ref}
      className={`dropdown${open ? ' open' : ''}`}
      onMouseEnter={() => { cancelClose(); setOpen(true); }}
      onMouseLeave={scheduleClose}
    >
      <span
        className={`nav-dropdown-trigger${isActive ? ' active' : ''}`}
        onClick={() => setOpen(o => !o)}
      >
        {item.label} <span className="nav-caret">▾</span>
      </span>

      {open && (
        <>
          <div style={{
            position: 'absolute',
            top: '100%', left: 0, right: 0,
            height: 10,
            zIndex: 998,
            background: 'transparent',
          }} />
          <div
            className="dropdown-menu"
            onMouseEnter={cancelClose}
            onMouseLeave={scheduleClose}
          >
            {item.children.map(c => (
              <Link
                key={c.path}
                to={c.path}
                className={currentPath === c.path ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {c.label}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function NavBar() {
  const [menuOpen,       setMenuOpen]       = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const { pathname } = useLocation();

  return (
    <header className="nav-bar">
      <img src="/images/logos/iem.png" alt="IEM" className="nav-logo" />

      <nav className="nav-links">
        {NAV_ITEMS.map(item =>
          item.children ? (
            <Dropdown key={item.label} item={item} currentPath={pathname} />
          ) : (
            <Link
              key={item.label}
              to={item.path}
              className={pathname === item.path ? 'active' : ''}
            >
              {item.label}
            </Link>
          )
        )}
      </nav>

      <button
        className="nav-hamburger"
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? 'bar bar-1 open' : 'bar bar-1'} />
        <span className={menuOpen ? 'bar bar-2 open' : 'bar bar-2'} />
        <span className={menuOpen ? 'bar bar-3 open' : 'bar bar-3'} />
      </button>

      <img src="/images/logos/uem.png" alt="UEM" className="nav-logo" />

      {menuOpen && (
        <nav className="nav-mobile-menu">
          {NAV_ITEMS.map(item => {
            if (!item.children) {
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={pathname === item.path ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            }
            const expanded = mobileExpanded === item.label;
            return (
              <div key={item.label} className="mobile-group">
                <button
                  className={`mobile-group-btn${expanded ? ' expanded' : ''}`}
                  onClick={() => setMobileExpanded(expanded ? null : item.label)}
                >
                  {item.label}
                  <span className="nav-caret">{expanded ? '▴' : '▾'}</span>
                </button>
                {expanded && (
                  <div className="mobile-sub">
                    {item.children.map(c => (
                      <Link
                        key={c.path}
                        to={c.path}
                        className={pathname === c.path ? 'active' : ''}
                        onClick={() => { setMenuOpen(false); setMobileExpanded(null); }}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      )}
    </header>
  );
}