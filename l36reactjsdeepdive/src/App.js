import './App.css';
import { createPortal } from 'react-dom';
import Form from './components/Form';
import Modal from './components/Modal';

function App() {
  return (
    <div className="App">
      <Form />
      {/* {
        createPortal(
          <Modal />,
          document.getElementById('modal-root')
        )
      } */}
    </div>
  );
}

export default App;
