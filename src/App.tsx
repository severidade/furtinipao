/* eslint-disable react/react-in-jsx-scope */
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
      <h1 className="app_title">Olá Mundo</h1>
      <p>
        Texto longo apresentando qualquer coisa
      </p>
      <CallUber />
      <div className="tijolo">P</div>
      <div className="tijolo">P</div>
      <div className="tijolo">P</div>
    </>
  );
}

export default App;
