export default function SponsorStrip() {
  return (
    <section className="sponsor-strip">
      <div className="sponsor-col left">
        <div className="sponsor-label">Technical Co-Sponsor</div>
        <img src="/images/logos/IEEE_kolkata.jpeg" alt="IEEE Kolkata Section" className="sponsor-logo" />
      </div>

      <div className="center-brand">
        <img src="/images/logos/aicare.png" alt="AICARE Logo" />
        <div className="hi">
          IEEE Conference Record ID : coming soon
        </div>
      </div>

      <div className="sponsor-col right">
        <div className="sponsor-label">Co-Sponsored By</div>
        <img src="/images/logos/IEEE_PES.png" alt="IEEE PES" className="sponsor-logo" />
      </div>
    </section>
  );
}