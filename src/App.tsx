/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import ScrollLinked from './components/Scroll-linked/index.tsx';
// import ScrollZoomImage from './components/ScrollZoomImage/index.tsx';
import ScrollZoomImage2 from './components/ScrollZoomImage2/index.tsx';

function App() {
  return (
    <>
      <ScrollLinked />
      <div className="image-container-single">
        <ScrollZoomImage2 />
      </div>
      <h1 className="app_title">Olá Mundo</h1>
      <p>
        Texto longo apresentando qualquer coisa
      </p>
      <div className="tijolo">P</div>
      <div className="tijolo">P</div>
      <div className="tijolo">P</div>
    </>
  );
}

export default App;
