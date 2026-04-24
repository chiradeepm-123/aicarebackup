export default function AboutRenewableEnergy() {
  return (
    <div style={{ maxWidth: 1100, margin: '60px auto', padding: '0 40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
        <div>
          <img
            src="/images/campus/extra_campus.jpg"
            alt="Centre of Excellence in Renewable Energy"
            style={{ width: '100%', borderRadius: 12, boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
          />
        </div>
        <div>
          <h1 className="section-title">Centre of Excellence in Renewable Energy</h1>
          <p>
            The Centre of Excellence in Renewable Energy at UEM Kolkata is a dedicated research
            and innovation hub focused on advancing sustainable energy solutions. The centre
            brings together leading researchers, engineers, and students to work on breakthrough
            technologies in solar, wind, hydrogen, and other renewable energy domains.
          </p>
          <br />
          <p>
            Equipped with cutting-edge laboratories and simulation facilities, the centre
            conducts both fundamental and applied research, addressing real-world energy
            challenges. It actively collaborates with national and international institutions,
            government bodies, and the private sector to drive the transition towards a
            clean energy future.
          </p>
          <br />
          <p>
            The centre regularly hosts workshops, seminars, and international conferences —
            including AICARE — to bring together the global scientific community and accelerate
            knowledge exchange in the renewable energy space.
          </p>
        </div>
      </div>
    </div>
  );
}