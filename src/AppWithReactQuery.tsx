/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable max-len */
import './CSS/Halogenfonts.css';
import './CSS/Macklinfonts.css';
import './App.css';
import usePageData from './CustomHooks/usePageData.tsx';

import Heder from './components/Heder/index.tsx';
import {
  SectionHeroWelcome, SectionHighlightGallery, SectionLunch, SectionBreads, SectionAddress, SectionOpeningHours, SectionTemplate,
} from './sections/index.ts';
import FixedWhatsAppButton from './components/FixedWhatsAppButton/index.tsx';
import Footer from './components/Footer/index.tsx';
import OrientationDetectorDevice from './components/OrientationDetectorDevice/index.tsx';

function App() {
  const { data, isLoading, error } = usePageData();

  // if (isLoading) return <LoadingSpinner />;
  if (isLoading) return <div>Carregando...</div>;
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

  console.log(data);

  return (
    <>
      <Heder />
      <SectionHeroWelcome id="sectionHeroWelcome" data={data.heroWelcome} />
      <SectionHighlightGallery id="highlightGallery" data={data.highlightGallery} />
      <SectionLunch id="lunch" data={data.lunch} />
      <SectionBreads id="breads" data={data.breads} />
      <SectionAddress id="sectionAddress" data={data.address} />
      <SectionOpeningHours id="openingHours" data={data.openingHours} />
      <SectionTemplate id="history" />
      <SectionTemplate id="events" />
      <FixedWhatsAppButton />
      <Footer />
      <OrientationDetectorDevice />
    </>
  );
}

export default App;
