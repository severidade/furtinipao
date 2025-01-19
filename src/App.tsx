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
import BreadsGalleryData from './data/BreadsGalleryData.tsx';
import BreadsSectionData from './data/BreadsSectionData.tsx';
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
        highlightItems={highlightItems}
      />
      <Lunch
        id="lunch"
        lunchData={LunchData}
      />
      <Breads
        id="breads"
        DataSlider={BreadsGalleryData}
        DataSection={BreadsSectionData}
      />
      <SectionAddress
        id="address"
        DataSection={SectionAddressData}
      />
      <SectionOpeningHours id="opening-hours" />

      <SectionTemplate
        id="history"
        dataSection={HistoryData}
      />
      <SectionTemplate
        id="events"
        dataSection={EventsData}
      />
      <Footer />
    </>
  );
}

export default App;
