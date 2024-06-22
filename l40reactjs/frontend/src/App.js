import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import User from './User';

function App() {
  
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/user' element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
