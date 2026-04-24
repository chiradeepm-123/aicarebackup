// //App.jsx
// import './styles/main.css';
// import NavBar from './components/NavBar';
// import SponsorStrip from './components/SponsorStrip';
// import LogoStrip from './components/LogoStrip';
// import Hero from './components/Hero';
// import TickerBar from './components/TickerBar';
// import MainContent from './components/MainContent';
// import Footer from './components/Footer';

// export default function App() {
//   return (
//     <>
//       <NavBar />
//       <SponsorStrip />
//       <LogoStrip />
//       <Hero />
//       <TickerBar />
//       <MainContent />
//       <Footer />
//     </>
//   );
// }
//app.jsx
import { Routes, Route } from 'react-router-dom';
import './styles/main.css';

import NavBar    from './components/NavBar';
import Footer    from './components/Footer';

// Pages
import Tracks from './pages/Tracks';
import HomePage            from './pages/HomePage';
import PaperSubmission     from './pages/PaperSubmission';
import ImportantDates      from './pages/ImportantDates';
import OrganizingCommittee from './pages/OrganizingCommittee';
import TechnicalCommittee  from './pages/TechnicalCommittee';
import AdvisoryBoard       from './pages/AdvisoryBoard';
import Speakers            from './pages/Speakers';
//import Submission          from './pages/Submission';
import Registration        from './pages/Registration';
import Venue               from './pages/Venue';
import ProgramSchedule     from './pages/ProgramSchedule';
import Contact             from './pages/Contact';
import AboutUniversity      from './pages/AboutUniversity';
import AboutRenewableEnergy from './pages/AboutRenewableEnergy';
import AboutAstronomy       from './pages/AboutAstronomy';
import InternationalAdvisory from './pages/InternationalAdvisory';
import StudentCommittee from './pages/StudentCommittee';
import PresentationGuidelines from './pages/PresentationGuidelines';

export default function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/"                            element={<HomePage />} />

        {/* Call For Papers */}
        <Route path="/call-for-papers/submission"  element={<PaperSubmission />} />
        <Route path="/call-for-papers/dates"       element={<ImportantDates />} />

        {/* Committee */}
        <Route path="/committee/organizing"        element={<OrganizingCommittee />} />
        <Route path="/committee/technical"         element={<TechnicalCommittee />} />
        <Route path="/committee/advisory"          element={<AdvisoryBoard />} />

        {/* Other pages */}
        <Route path="/speakers"                    element={<Speakers />} />
       
        <Route path="/registration"                element={<Registration />} />
        <Route path="/venue"                       element={<Venue />} />
        <Route path="/program-schedule"            element={<ProgramSchedule />} />
        <Route path="/contact"                     element={<Contact />} />
        <Route path="/about/university"      element={<AboutUniversity />} />
<Route path="/about/renewable-energy" element={<AboutRenewableEnergy />} />
<Route path="/about/astronomy"       element={<AboutAstronomy />} />
<Route path="/call-for-papers/tracks" element={<Tracks />} />
<Route path="/committee/international-advisory" element={<InternationalAdvisory />} />
<Route path="/committee/student" element={<StudentCommittee />} />
<Route path="/call-for-papers/presentation-guidelines" element={<PresentationGuidelines />} />
      </Routes>

      <Footer />
    </>
  );
}