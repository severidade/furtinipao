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

import SectionBreads from './sections/SectionBreads/index.tsx';
import SectionAddress from './sections/SectionAddress/index.tsx';
import SectionOpeningHours from './sections/SectionOpeningHours/index.tsx';
import SectionTemplate from './sections/SectionTemplate/index.tsx';

// Dados que no futuro podem ser o retorno de uma api
import highlightItems from './data/HighlightGalleryData.tsx';
import LunchData from './data/LunchData.tsx';

import BreadsData from './data/BreadsData.tsx';
import SectionAddressData from './data/SectionAddressData.tsx';
import HistoryData from './data/HistoryData.tsx';
import EventsData from './data/EventsData.tsx';
import SectionLunch from './sections/SectionLunch/index.tsx';
import OrientationDetectorDevice from './components/OrientationDetectorDevice/index.tsx';

function App() {
  return (
    <>
      <Heder />
      <div id="hero" className="container-hero">
        <HeroImage />
        <HeroWelcome />
      </div>

      <HighlightGallery id="highlights" highlightItems={highlightItems} />
      <SectionLunch id="lunch" dataSection={LunchData} />
      <SectionBreads id="breads" dataSection={BreadsData} />
      <SectionAddress id="address" dataSection={SectionAddressData} />
      <SectionOpeningHours id="opening-hours" />
      <SectionTemplate id="history" dataSection={HistoryData} />
      <SectionTemplate id="events" dataSection={EventsData} />
      <FixedWhatsAppButton />
      <Footer />
      <OrientationDetectorDevice />
    </>
  );
}

export default App;

// https://squoosh.app/ comprimir imagens
