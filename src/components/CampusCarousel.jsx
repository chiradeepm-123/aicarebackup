//campuscarousel.jsx
import { useState, useEffect } from 'react';
// 6 images across 2 pages (3 per page)
const allImages = [
  { src: '/images/campus/uem_campus.jpg',      label: 'UEM Campus' },
  { src: '/images/campus/iem_campus.jpg',       label: 'IEM Campus' },
  { src: '/images/campus/conference_venue.jpg', label: 'Conference Venue' },
  { src: '/images/campus/extra_campus.jpg',     label: 'Campus Life' },
  { src: '/images/campus/extra_campus2.png',    label: 'Campus View' },
  { src: '/images/campus/image.png',    label: 'Campus Grounds' },
];

const TOTAL_PAGES = 2; // page 0 = images 0-2, page 1 = images 3-5

export default function CampusCarousel() {
  const [page, setPage] = useState(0);

  // Auto-switch every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setPage(p => (p + 1) % TOTAL_PAGES);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const isFirst = page === 0;
  const isLast  = page === TOTAL_PAGES - 1;
  const slice   = allImages.slice(page * 3, page * 3 + 3);

  return (
    <div className="campus-carousel">

      {/* ← PREV */}
      <button
        className="carousel-btn-grid"
        onClick={() => setPage(p => Math.max(0, p - 1))}
        style={{ opacity: isFirst ? 0.25 : 1, pointerEvents: isFirst ? 'none' : 'auto' }}
      >
        &#8249;
      </button>

      {/* GRID — always 3 columns */}
      <div className="carousel-grid">
        {slice.map(card => (
          <div key={card.label} className="carousel-card">
            <img src={card.src} alt={card.label} />
            <div className="card-label">{card.label}</div>
          </div>
        ))}
      </div>

      {/* → NEXT */}
      <button
        className="carousel-btn-grid"
        onClick={() => setPage(p => Math.min(TOTAL_PAGES - 1, p + 1))}
        style={{ opacity: isLast ? 0.25 : 1, pointerEvents: isLast ? 'none' : 'auto' }}
      >
        &#8250;
      </button>

      {/* Dot indicators */}
      <div className="carousel-dots">
        {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
          <span
            key={i}
            className={`carousel-dot${page === i ? ' active' : ''}`}
            onClick={() => setPage(i)}
          />
        ))}
      </div>

    </div>
  );
}