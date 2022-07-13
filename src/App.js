import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MainContainer from './components/mainContainer';
import DriveInfo from './components/driveInfo';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <MainContainer></MainContainer>
    </div>
  );
}

export default App;
