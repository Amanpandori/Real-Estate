import './App.css';
import Navbar from './components/header/Navbar';
import Header from './components/header/Header';
import About from './components/homeabout/About';
import Homesetion from './components/homesetion/Homesetion';
import Bychoose from './components/bychoose/Bychoose';
import Categories from './components/categories/Categories';
import BandS from './components/by&sell/BandS';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Homesetion/>
      <Bychoose/>
      {/* <Categories/> */}
      <BandS/>
      <Footer/>
    </div>
  );
}

export default App;
