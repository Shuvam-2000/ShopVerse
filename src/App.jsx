import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import Footer from './components/Footer';
import ExploreProducts from './pages/ExploreProducts';
import AboutUs from './pages/AboutUs';
import SignIn from './pages/SignIn';
import Cart from './pages/Cart';
import Products from './pages/Products';
import PlaceOrder from './pages/PlaceOrder';
import OurPolicies from './components/OurPolicies';
import ScrollOnTop from './components/ScrollOnTop';
import SearchBar from './components/SearchBar';
import SignUp from './pages/SignUp';
import ForgotPassoword from './pages/ForgotPassoword';
import './index.css';

function App() {
  return (
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[4vw]'>
        <BrowserRouter>
          <ScrollOnTop/>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/exploreproducts" element={<ExploreProducts />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgotpassowrd" element={<ForgotPassoword />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:productId" element={<Products />} />
              <Route path="/placeorder" element={<PlaceOrder />} />
              <Route path="/ourpolicies" element={<OurPolicies />} />
              <Route path="/searchbar" element={<SearchBar />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
      </div>
  );
}

export default App;
