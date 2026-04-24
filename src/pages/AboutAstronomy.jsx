export default function AboutAstronomy() {
  return (
    <div style={{ maxWidth: 1100, margin: '60px auto', padding: '0 40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
        <div>
          <h1 className="section-title">Centre of Excellence in Astronomical Studies, UEMK</h1>
          <p>
            The Centre of Excellence in Astronomical Studies at UEM Kolkata is one of the
            few dedicated astronomy research centres within a technical university in India.
            It serves as a bridge between cutting-edge space science and engineering,
            fostering interdisciplinary research that pushes the boundaries of our
            understanding of the universe.
          </p>
          <br />
          <p>
            The centre is equipped with modern observational instruments, a space observatory,
            and advanced computational resources for astrophysical simulations. Researchers
            here work on topics spanning exoplanet detection, cosmic ray studies, radio
            astronomy, and space weather monitoring.
          </p>
          <br />
          <p>
            Through its outreach programmes, the centre also inspires the next generation
            of astronomers and space scientists, hosting stargazing events, school visits,
            and public lectures that make astronomy accessible to all.
          </p>
        </div>
        <div>
          <img
            src="/images/campus/conference_venue.jpg"
            alt="Centre of Excellence in Astronomical Studies"
            style={{ width: '100%', borderRadius: 12, boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
          />
        </div>
      </div>
    </div>
  );
}