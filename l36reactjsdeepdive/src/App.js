import './App.css';
import { createPortal } from 'react-dom';
import Form from './components/Form';
import Modal from './components/Modal';
import CatFacts from './components/CatFacts';
import ModalReact from './components/ModalReact';

function App() {
  return (
    <div className="App">
      <CatFacts />
      {/* <Form /> */}
      {
        createPortal(
          <ModalReact />,
          document.getElementById('modal-root')
        )
      }
    </div>
  );
}

export default App;
