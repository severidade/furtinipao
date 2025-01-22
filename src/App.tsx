/* eslint-disable react/react-in-jsx-scope */
import './CSS/Halogenfonts.css';
import './CSS/Macklinfonts.css';
import './App.css';

import Heder from './components/Heder/index.tsx';
import HeroImage from './components/HeroImage/index.tsx';
import HeroWelcome from './components/HeroWelcome/index.tsx';

import HighlightGallery from './components/HighlightGallery/index.tsx';
import Lunch from './components/Lunch/index.tsx';

import SectionBreads from './components/SectionBreads/index.tsx';
import SectionAddress from './components/SectionAddress/index.tsx';
import SectionOpeningHours from './components/SectionOpeningHours/index.tsx';
import Footer from './components/Footer/index.tsx';
import FixedWhatsAppButton from './components/FixedWhatsAppButton/index.tsx';

import SectionTemplate from './components/SectionTemplate/index.tsx';

// Dados que no futuro podem ser o retorno de uma api
import highlightItems from './data/HighlightGalleryData.tsx';
import LunchData from './data/LunchData.tsx';
import BreadsData from './data/BreadsData.tsx';
import SectionAddressData from './data/SectionAddressData.tsx';
import HistoryData from './data/HistoryData.tsx';
import EventsData from './data/EventsData.tsx';
import SectionLunch from './components/SectionLunch/index.tsx';

function App() {
  return (
    <>
      <Heder />
      <div id="hero" className="container-hero">
        <HeroImage />
        <HeroWelcome />
      </div>

      {/* Transformar em uma seção */}
      <HighlightGallery
        id="highlights"
        highlightItems={highlightItems} // padronizar
      />

      <SectionLunch id="lunch" dataSection={LunchData} />

      <SectionBreads id="breads" DataSection={BreadsData} />
      <SectionAddress id="address" dataSection={SectionAddressData} />
      <SectionOpeningHours id="opening-hours" />
      <SectionTemplate id="history" dataSection={HistoryData} />
      <SectionTemplate id="events" dataSection={EventsData} />
      <FixedWhatsAppButton />
      <Footer />
    </>
  );
}

export default App;

// https://squoosh.app/ comprimir imagens
