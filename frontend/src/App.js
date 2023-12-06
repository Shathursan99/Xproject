import logo from './logo.svg';
import './App.css';
import Hero from './Components/Hero/Hero';
import Navigation from './Components/Navigation/Navigation';
import Features from './Components/Features/Features';
import LandingPage from './Pages/LandingPage/LandingPage';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <LandingPage/>
    </div>
  );
}

export default App;
