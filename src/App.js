import { Route, Routes, BrowserRouter } from 'react-router-dom'

import './App.css';
import DriveInfo from './components/DriveInfo/DriveInfo';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Application from './pages/Application';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Home/> */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/application' element={<Application/>} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
