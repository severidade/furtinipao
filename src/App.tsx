/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable max-len */
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import './CSS/Halogenfonts.css';
import './CSS/Macklinfonts.css';
import './App.css';

import Header from './components/Heder/index.tsx';
import {
  SectionHeroWelcome,
  SectionHighlightGallery,
  SectionLunch,
  SectionBreads,
  SectionAddress,
  SectionOpeningHours,
  SectionTemplate,
} from './sections/index.ts';
import FixedWhatsAppButton from './components/FixedWhatsAppButton/index.tsx';
import Footer from './components/Footer/index.tsx';
import OrientationDetectorDevice from './components/OrientationDetectorDevice/index.tsx';

const GA_ID = 'G-3FF6SN0BX5';

function App() {
  useEffect(() => {
    ReactGA.initialize(GA_ID);
    ReactGA.send('pageview');
  }, []);

  return (
    <>
      <Header />
      <SectionHeroWelcome id="sectionHeroWelcome" />
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
