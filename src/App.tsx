/* eslint-disable react/react-in-jsx-scope */
import './CSS/Halogenfonts.css';
import './CSS/Macklinfonts.css';
import './App.css';

import Heder from './components/Heder/index.tsx';
import HeroImage from './components/HeroImage/index.tsx';
import HeroWelcome from './components/HeroWelcome/index.tsx';
import HighlightGallery from './components/HighlightGallery/index.tsx';
import FixedWhatsAppButton from './components/FixedWhatsAppButton/index.tsx';
import Footer from './components/Footer/index.tsx';
import OrientationDetectorDevice from './components/OrientationDetectorDevice/index.tsx';

import SectionBreads from './sections/SectionBreads/index.tsx';
import SectionLunch from './sections/SectionLunch/index.tsx';
import SectionAddress from './sections/SectionAddress/index.tsx';
import SectionOpeningHours from './sections/SectionOpeningHours/index.tsx';
import SectionTemplate from './sections/SectionTemplate/index.tsx';

function App() {
  return (
    <>
      <Heder />
      <div id="hero" className="container-hero">
        <HeroImage />
        <HeroWelcome />
      </div>
      <HighlightGallery id="highlightGallery" />
      <SectionLunch id="lunch" />
      <SectionBreads id="breads" />
      <SectionAddress id="sectionAddress" />
      <SectionOpeningHours id="opening-hours" />
      <SectionTemplate id="history" />
      <SectionTemplate id="events" />
      <FixedWhatsAppButton />
      <Footer />
      <OrientationDetectorDevice />
    </>
  );
}

export default App;

// https://squoosh.app/ comprimir imagens
