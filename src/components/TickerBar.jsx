const items = [
  'Applications of AI in Computing', 'UAV Networks', 'Astronomy & Space Science',
  'Renewable Energy Systems', 'Deep Learning & Neural Networks', 'Solar & Wind Technology',
  'Edge Computing', 'Astronomical Instrumentation',
];

// Duplicate for seamless infinite scroll
const allItems = [...items, ...items];

export default function TickerBar() {
  return (
    <div className="ticker-bar">
      <div className="ticker-inner">
        {allItems.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
