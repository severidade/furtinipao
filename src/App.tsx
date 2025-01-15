/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from 'react';
import './CSS/Halogenfonts.css';
import './CSS/Macklinfonts.css';
import './App.css';
// import CallUber from './components/CallUber/index.tsx';
import { p } from 'framer-motion/client';
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
import SectionHistory from './components/SectionHistory/index.tsx';
import SectionEvents from './components/SectionEvents/index.tsx';
import Preloading from './components/PreLoading/index.tsx';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkImagesLoaded = async () => {
      // seleciona todas as imagens no documento
      const images = document.querySelectorAll('img');

      // cria um array de promises que resolve quando cada imagem carrega
      const imagePromises = Array.from(images).map((img) => new Promise<void>((resolve, reject) => {
        // Se a imagem já estiver carregada
        if (img.complete) {
          resolve();
        } else {
          // Caso contrário, adiciona listeners para quando carregar ou ocorrer erro
          img.addEventListener('load', resolve);
          img.addEventListener('error', reject); // pode ser útil para detectar falhas de carregamento
        }
      }));

      // aguarda todas as imagens serem carregadas
      try {
        await Promise.all(imagePromises);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao carregar as imagens', error);
        setLoading(false); // Também define como false, caso haja erro no carregamento das imagens
      }
    };

    checkImagesLoaded();
  }, []);

  if (loading) {
    return <Preloading />;
  }

  return (
    <>
      <WhatsAppReserve />
      <Heder />
      <div id="hero" className="container-hero">
        <HeroImage />
        <HeroWelcome />
      </div>
      <HighlightGallery id="highlights" highlightItems={highlightItems} />
      <Lunch id="lunch" lunchData={LunchData} />
      <Breads id="breads" DataSlider={BreadsGalleryData} DataSection={BreadsSectionData} />
      <SectionAddress id="address" DataSection={SectionAddressData} />
      <SectionOpeningHours id="opening-hours" />
      <SectionHistory id="history" />
      <SectionEvents id="events" />
      <Footer />
    </>
  );
}

export default App;
