import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Shop from './components/Shop';
import About from './components/About';
import Services from './components/Services';
import Blog from './components/Blog'
import Contact from './components/Contact'
import Cart from './components/Cart'
import Checkout from './components/Checkout'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/shop' element={<Shop />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/services' element={<Services />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} /> 
          <Route path='/checkout' element={<Checkout />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
