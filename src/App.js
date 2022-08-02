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
import AdminApplicants from './pages/AdminApplicants';
import AdminProtectedRoute from './ProtectedRoute/AdminProtectedRoute';
import StudentProtectedRoute from './ProtectedRoute/StudentProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <UserAuthContextProvider>
        <Routes>
          <Route path='/' element={<SignIn/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/home' element={<StudentProtectedRoute><Home/></StudentProtectedRoute>}/>
          <Route path='/application' element={<StudentProtectedRoute><Application/></StudentProtectedRoute>} />
          <Route path='/profile' element={<StudentProtectedRoute><Profile /></StudentProtectedRoute>} />
          <Route path='/drivedetail/:driveid' element={<DriveDetail/>} />
          <Route path='/admin' element={<AdminProtectedRoute><Admin/></AdminProtectedRoute>} />
          <Route path='admin/create' element={<AdminProtectedRoute><Create/></AdminProtectedRoute>}/>
          <Route path='admin/applicants' element={<AdminProtectedRoute><AdminApplicants/></AdminProtectedRoute>}/>
        </Routes>
        </UserAuthContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
