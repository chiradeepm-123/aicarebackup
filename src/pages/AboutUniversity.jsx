export default function AboutUniversity() {
  return (
    <div style={{ maxWidth: 1100, margin: '60px auto', padding: '0 40px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
        <div>
          <h1 className="section-title">University of Engineering & Management, Kolkata</h1>
          <p>
            The University of Engineering & Management (UEM), Kolkata is one of the premier
            technical universities in Eastern India, dedicated to providing world-class education
            in engineering, management, and technology. Established with a vision to nurture
            innovative thinkers and future-ready professionals, UEM Kolkata has consistently
            ranked among the top institutions in the region.
          </p>
          <br />
          <p>
            The university boasts state-of-the-art infrastructure, a highly qualified faculty,
            and a vibrant campus life that encourages both academic excellence and holistic
            development. With strong industry partnerships and research collaborations across
            the globe, UEM Kolkata prepares students to meet the challenges of a rapidly
            evolving technological landscape.
          </p>
          <br />
          <p>
            UEM Kolkata is committed to fostering a culture of research and innovation,
            offering students opportunities to work on cutting-edge projects in fields such
            as artificial intelligence, renewable energy, space science, and more.
          </p>
        </div>
        <div>
          <img
            src="/images/campus/uem_campus.jpg"
            alt="UEM Kolkata Campus"
            style={{ width: '100%', borderRadius: 12, boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
          />
        </div>
      </div>
    </div>
  );
}