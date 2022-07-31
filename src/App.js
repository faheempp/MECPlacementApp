import { Route, Routes, BrowserRouter } from 'react-router-dom'

import './App.css';

import Profile from './pages/Profile';
import Home from './pages/Home';
import Application from './pages/Application';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Admin from './pages/Admin';
import Create from './pages/Create';
import DriveDetail from './pages/DriveDetail'
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <UserAuthContextProvider>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/application' element={<Application/>} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/admin' element={<Admin/>} />
          <Route path='/drivedetail/:driveid' element={<DriveDetail/>} />
          <Route path='admin/create' element={<Create/>}/>
        </Routes>
        </UserAuthContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
