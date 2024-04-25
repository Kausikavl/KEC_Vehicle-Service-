import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Register from './pages/Register';
import Reg from './pages/Login';
import Home from './pages/home';
import Vehicle from './pages/vehicle';

function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
            <Route path='/login' element={<Reg/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/vehicle' element={<Vehicle/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
