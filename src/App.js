import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Gun from './Components/Gun/Gun';
import Updated from './Components/Updated/Updated';
import Shop from './Components/Shop/Shop';
import Bullet from './Components/Bullet/Bullet';
import Flag from './Components/Flag/Flag';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
     <Header />
     <Hero />
     <Gun />
     <Updated />
     <Shop />
     <Bullet />
     <Flag />
     <Footer />
  
    </div>
  );
}

export default App;
