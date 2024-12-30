/* eslint-disable react/react-in-jsx-scope */
import './CSS/Halogenfonts.css';
import './CSS/Macklinfonts.css';
import './App.css';
import CallUber from './components/CallUber/index.tsx';
import ScrollZoomImage from './components/ScrollZoomImage/index.tsx';
import WhatsAppReserve from './components/WhatsAppReserve/index.tsx';

function App() {
  return (
    <>
      <WhatsAppReserve />
      <div className="image-container-single">
        <ScrollZoomImage />
      </div>
      <div className="hero_fase">
        <h1 className="app_title">O pão é de verdade e o café de coração</h1>
        <p className="app_title_subtitle">
          Arte, gastronomia e conforto esperam por você aqui.
        </p>
      </div>
      <CallUber />
      <div className="tijolo">P</div>
      <div className="tijolo">P</div>
      <div className="tijolo">P</div>
    </>
  );
}

export default App;
