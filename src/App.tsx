/* eslint-disable react/react-in-jsx-scope */
import './CSS/Halogenfonts.css';
import './CSS/Macklinfonts.css';
import './App.css';
// import CallUber from './components/CallUber/index.tsx';
import HeroImage from './components/HeroImage/index.tsx';
import WhatsAppReserve from './components/WhatsAppReserve/index.tsx';
import HeroWelcome from './components/HeroWelcome/index.tsx';
import Heder from './components/Heder/index.tsx';
import HighlightGallery from './components/HighlightGallery/index.tsx';
import Lunch from './components/Lunch/index.tsx';
import Breads from './components/Breads/index.tsx';

import highlightItems from './data/HighlightGalleryData.tsx';
import LunchData from './data/LunchData.tsx';
import BreadsGalleryData from './data/BreadsGalleryData.tsx';
import BreadsSectionData from './data/BreadsSectionData.tsx';
import SectionAddressData from './data/SectionAddressData.tsx';
import SectionAddress from './components/SectionAddress/index.tsx';
import SectionOpeningHours from './components/SectionOpeningHours/index.tsx';
import Footer from './components/Footer/index.tsx';

function App() {
  return (
    <>
      <WhatsAppReserve />
      <Heder />
      <div className="container-hero">
        <HeroImage />
        <HeroWelcome />
      </div>
      <HighlightGallery highlightItems={highlightItems} />
      <Lunch lunchData={LunchData} />
      <Breads DataSlider={BreadsGalleryData} DataSection={BreadsSectionData} />
      <SectionAddress DataSection={SectionAddressData} />
      <SectionOpeningHours />
      <Footer />
    </>
  );
}

export default App;
