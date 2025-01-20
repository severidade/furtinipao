/* eslint-disable react/react-in-jsx-scope */
import './CSS/Halogenfonts.css';
import './CSS/Macklinfonts.css';
import './App.css';

import HeroImage from './components/HeroImage/index.tsx';
import WhatsAppReserve from './components/WhatsAppReserve/index.tsx';
import HeroWelcome from './components/HeroWelcome/index.tsx';
import Heder from './components/Heder/index.tsx';
import HighlightGallery from './components/HighlightGallery/index.tsx';
import Lunch from './components/Lunch/index.tsx';
import Breads from './components/Breads/index.tsx';
import SectionAddress from './components/SectionAddress/index.tsx';
import SectionOpeningHours from './components/SectionOpeningHours/index.tsx';
import Footer from './components/Footer/index.tsx';

import SectionTemplate from './components/SectionTemplate/index.tsx';

import highlightItems from './data/HighlightGalleryData.tsx';
import LunchData from './data/LunchData.tsx';
import BreadsData from './data/BreadsData.tsx';
import SectionAddressData from './data/SectionAddressData.tsx';
import HistoryData from './data/HistoryData.tsx';
import EventsData from './data/EventsData.tsx';

function App() {
  return (
    <>
      <WhatsAppReserve />
      <Heder />
      <div id="hero" className="container-hero">
        <HeroImage />
        <HeroWelcome />
      </div>
      <HighlightGallery
        id="highlights"
        highlightItems={highlightItems} // padronizar
      />
      <Lunch
        id="lunch"
        lunchData={LunchData} // padronizar
      />

      <Breads
        id="breads"
        DataSection={BreadsData} // PADRONIZADO
      />
      <SectionAddress
        id="address"
        dataSection={SectionAddressData} // PADRONIZADO
      />

      {/* PADRONIZADO */}
      <SectionOpeningHours id="opening-hours" />

      <SectionTemplate
        id="history"
        dataSection={HistoryData} // PADRONIZADO
      />
      <SectionTemplate
        id="events"
        dataSection={EventsData} // PADRONIZADO
      />
      <Footer />
    </>
  );
}

export default App;

// https://squoosh.app/ comprimir imagens
