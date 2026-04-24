import SponsorStrip from '../components/SponsorStrip';
import LogoStrip from '../components/LogoStrip';
import Hero from '../components/Hero';
import TickerBar from '../components/TickerBar';
import MainContent from '../components/MainContent';

export default function HomePage() {
  return (
    <>
      <SponsorStrip />
      <LogoStrip />
      <Hero />
      <TickerBar />
      <MainContent />
    </>
  );
}