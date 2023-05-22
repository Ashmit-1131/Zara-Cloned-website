
import './App.css';

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
