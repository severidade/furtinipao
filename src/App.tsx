/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable max-len */
import { useState, useEffect } from 'react';
import './CSS/Halogenfonts.css';
import './CSS/Macklinfonts.css';
import usePageData from './CustomHooks/usePageData.tsx';

import Heder from './components/Heder/index.tsx';
import {
  SectionHeroWelcome, SectionHighlightGallery, SectionLunch, SectionBreads, SectionAddress, SectionOpeningHours, SectionTemplate,
} from './sections/index.ts';
import FixedWhatsAppButton from './components/FixedWhatsAppButton/index.tsx';
import Footer from './components/Footer/index.tsx';
import OrientationDetectorDevice from './components/OrientationDetectorDevice/index.tsx';
import LoadingSpinner from './components/LoadingSpinner/index.tsx';

function App() {
  const { data, isLoading, error } = usePageData();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 10 : 100));
      }, 500);

      return () => clearInterval(interval);
    }
    return undefined;
  }, [isLoading]);

  if (isLoading) return <LoadingSpinner progress={progress} />;

  if (error) {
    return (
      <div className="container_error">
        <div className="alert_error">
          Erro ao carregar dados:
          {' '}
          {error.message}
        </div>
      </div>
    );
  }
  if (!data) return null;

  return (
    <>
      <Heder />
      <SectionHeroWelcome id="sectionHeroWelcome" data={data.heroWelcome} />
      <SectionHighlightGallery id="highlightGallery" data={data.highlightGallery} />
      <SectionLunch id="lunch" data={data.lunch} />
      <SectionBreads id="breads" data={data.breads} />
      <SectionAddress id="sectionAddress" data={data.address} />
      <SectionOpeningHours id="openingHours" data={data.openingHours} />
      <SectionTemplate id="history" data={data.history} />
      <SectionTemplate id="events" data={data.events} />
      <FixedWhatsAppButton data={data.whatsAppButton} />
      <Footer />
      <OrientationDetectorDevice />
    </>
  );
}

export default App;
