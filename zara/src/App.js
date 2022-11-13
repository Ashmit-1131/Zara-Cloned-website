// import logo from './logo.svg';
import './App.css';
import DrawerExample from './Components/Drawer';
import PlacementExample from './Components/Drawer';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import AllRoute from './Routes/AllRoute';

function App() {
  return (
    <div className="App">

    <div>
   <Navbar/>
   <AllRoute />
   <Footer/>
   </div>
    </div>
  );
}

export default App;
