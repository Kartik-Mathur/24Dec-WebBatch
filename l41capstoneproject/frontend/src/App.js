import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Restaurants from './components/Restaurants';
import Restaurant from './components/Restaurant';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='app' element={<Home />}>
          <Route path=':restaurant_id' element={<Restaurant />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
