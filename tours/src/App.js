
import './App.css';
import './index.css'
import {Route,Routes} from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Contact from './routes/Contact';
import Register from './routes/Register';
import Reservation from './routes/reservation_dashboard';




function App() {
  return (
    <div className="App">
      
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path='/reservation' element={<Reservation/>} />
    </Routes>    
    </div>
  );
}

export default App;
