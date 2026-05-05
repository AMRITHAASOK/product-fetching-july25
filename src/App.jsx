import Button from 'react-bootstrap/Button';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Allproducts from './pages/Allproducts';
import ViewProducts from './pages/ViewProducts';
import PageNotFound from './pages/PageNotFound';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/products' element={<Allproducts />} />
        <Route path='/viewProducts/:id' element={<ViewProducts />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
