import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AllRoute from './Routes/AllRoutes';

function App() {
  return (
    <div className="App">
  <div>
<Navbar/>
<Footer/>
<AllRoute/>
  </div>
    </div>
  );
}

export default App;
