import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/HOMEPAGE/header/Navbar';
import Header from './components/HOMEPAGE/header/Header';
import Footer from './components/footer/Footer';
import Buyerpage from './components/HOMEPAGE/by&sell/Buyerpage';
import Sellerpage from './components/HOMEPAGE/by&sell/Sellerpage';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/Sell" element={<Sellerpage/>}/>
        <Route path="/Buy" element={<Buyerpage/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>      
    </div>
  );
}

export default App;
