import { Route, Routes, BrowserRouter } from 'react-router-dom'

import './App.css';

import Profile from './pages/Profile';
import Home from './pages/Home';
import Application from './pages/Application';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Admin from './pages/Admin';
import Update from './pages/Update';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/application' element={<Application/>} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/admin' element={<Admin/>} />
          <Route path='admin/update' element={<Update/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
