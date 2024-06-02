import './App.css';
import { createPortal } from 'react-dom';
import Form from './components/Form';
import Modal from './components/Modal';
import CatFacts from './components/CatFacts';
import ModalReact from './components/ModalReact';
import CleanUp from './components/CleanUp';

function App() {
  return (
    <div className="App">
      <CleanUp />
      {/* <CatFacts /> */}
      {/* <Form /> */}
      {/* {
        createPortal(
          <ModalReact />,
          document.getElementById('modal-root')
        )
      } */}
    </div>
  );
}

export default App;
