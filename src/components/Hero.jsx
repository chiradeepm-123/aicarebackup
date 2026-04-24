import CampusCarousel from './CampusCarousel';
import PixelBlast from './PixelBlast';

export default function Hero() {
  return (
    <section className="hero">
      <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#2e6fd4"
          patternScale={2}
          patternDensity={1}
          enableRipples
          rippleSpeed={0.3}
          rippleThickness={0.1}
          rippleIntensityScale={1}
          speed={0.5}
          transparent
          edgeFade={0.25}
        />
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">
          AICARE <span className="yr">2027</span>
        </h1>
        <div className="title-rule" />
        <p className="hero-subtitle">
          <strong>
            2nd International Conference on Artificial Intelligence
            for Computing, Astronomy, and Renewable Energy, 2027
          </strong>
        </p>
        {/* <div className="conf-id-line">IEEE Conference Record ID : xxxxx</div> */}
        <div className="organized-line">
          <span>Organized by</span>
          Centre of Excellence in Renewable Energy &amp; Centre of Excellence in Astronomy — UEM Kolkata
          <div>
          All accepted and presented papers will be submitted for inclusionin the IEEE xplore Digital Library 
          </div>
        </div>
      </div>
      <CampusCarousel />
    </section>
  );
}