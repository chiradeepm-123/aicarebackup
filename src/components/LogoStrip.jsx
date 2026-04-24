const logos = [
  { src: '/images/logos/Renewable_Energy_Logo.png', alt: 'IEEE', className: 'logo-renewable' },
  { src: '/images/logos/Space_Observatory_Logo.png', alt: 'Space Observatory', className: 'logo-space' },
  { src: '/images/logos/IEEE_Logo.png', alt: 'UEM Kolkata', className: 'logo-uem' },
  { src: '/images/logos/image.png', alt: 'IEEE PES', className: 'logo-pes' },
];

export default function LogoStrip() {
  return (
    <div className="logo-strip">
      {logos.map((logo, i) => (
        <span key={logo.alt} style={{ display: 'contents' }}>
          <img src={logo.src} alt={logo.alt} className={`strip-logo ${logo.className}`} />
          {i < logos.length - 1 && <div className="strip-sep" />}
        </span>
      ))}
    </div>
  );
}