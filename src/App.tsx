/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable max-len */
import './CSS/Halogenfonts.css';
import './CSS/Macklinfonts.css';
import './App.css';

import Heder from './components/Heder/index.tsx';
import {
  SectionHeroWelcome, SectionHighlightGallery, SectionLunch, SectionBreads, SectionAddress, SectionOpeningHours, SectionTemplate,
} from './sections/index.ts';
import FixedWhatsAppButton from './components/FixedWhatsAppButton/index.tsx';
import Footer from './components/Footer/index.tsx';
import OrientationDetectorDevice from './components/OrientationDetectorDevice/index.tsx';

function App() {
  return (
    <>
      <Heder />
      <SectionHeroWelcome id="hero" />
      <SectionHighlightGallery id="highlightGallery" />
      <SectionLunch id="lunch" />
      <SectionBreads id="breads" />
      <SectionAddress id="sectionAddress" />
      <SectionOpeningHours id="openingHours" />
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
