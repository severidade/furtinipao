/* eslint-disable react/react-in-jsx-scope */
import './CSS/Halogenfonts.css';
import './CSS/Macklinfonts.css';
import './App.css';
import CallUber from './components/CallUber/index.tsx';
import HeroImage from './components/HeroImage/index.tsx';
import WhatsAppReserve from './components/WhatsAppReserve/index.tsx';
import HeroWelcome from './components/HeroWelcome/index.tsx';

function App() {
  return (
    <>
      <WhatsAppReserve />
      <div className="container_header">
        <h1 className="logo_frutini">Frutini padaria e confeitaria</h1>
        <nav className="nav_frutini">
          <ul>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ul>
        </nav>
      </div>
      <div className="container-hero">
        <HeroImage />
        <HeroWelcome />
      </div>
      <CallUber />
      <div className="tijolo">P</div>
      <div className="tijolo">P</div>
      <div className="tijolo">P</div>
    </>
  );
}

export default App;
