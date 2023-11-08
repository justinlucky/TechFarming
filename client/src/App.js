import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './Pages/Index/Index';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Checkout from './Pages/Checkout/Checkout';
import Login from './Pages/Login/Login';
import Signup from './Pages/SignUp/SignUp';
import Dashboard from './Pages/Dashboard/Dashboard';
import Shopping from './Pages/Shopping/Shopping';
import Terms from './Pages/Terms/Terms';
import Privacy from './Pages/Privacy/Privacy';
import Products from './Pages/Products/Products';
import ShippingReturns from './Pages/ShippingReturns/ShippingReturns';
import Wishlist from './Pages/Wishlist/Wishlist';
import Category from './Pages/Category/Category';
import Testimonials from './Pages/Testimonials/Testimonials';
import MemberSignUp from './Pages/SignUp/MemberSignUp/MemberSignUp';
import AdminSignUp from './Pages/SignUp/AdminSignUp/AdminSignUp';
import SellerSignIn from './Pages/Login/SellerSignIn/SellerSignIn';
import Logo from './Components/FormLogo/Logo';
import SellerTerm from './Pages/SignUp/SellerSignUp/SellerTermsandCondition/SellerTerm';
import SellerCondition from './Pages/SignUp/SellerSignUp/SellerTermsandCondition/SellerCondition';
import SellerSignUp from './Pages/SignUp/SellerSignUp/SellerSignUp';
import Services from './Pages/Services/Services';
import AiMlServices from './Pages/Services/AIMLService/AiMlServices';
import BookingServices from './Pages/Services/BookingServices/BookingServices';
import Aquaponics from './Pages/Services/Aquaponics/Aquaponics';
import GreenHouse from './Pages/Services/GreenHouse/GreenHouse';
import SoilTesting from './Pages/Services/SoilTesting/SoilTesting';
import WeedControl from './Pages/Services/WeedControl/WeedControl';
import PestScanning from './Pages/Services/PestScanning/PestScanning';
import Hydroponics from './Pages/Services/Hydroponics/Hydroponics';
import Cart from './Pages/Cart/Cart';
import Payment from './Pages/Payment/Payment';


function App() {
  return (
    <div className="App">
      <Router>
        <div id='separator'>
          <header></header>
          <section id='main'>
            <Routes>
              <Route exact path='/' Component={Index}></Route>
              <Route path='/logo' Component={Logo}></Route>
              <Route path='/home' Component={Home}></Route>
              <Route path='/about-us' Component={About}></Route>
              <Route path='/blog' Component={Blog}></Route>
              <Route path='/contact-us' Component={Contact}></Route>
              <Route path='/checkout' Component={Checkout}></Route>
              <Route path='/login' Component={Login}></Route>
              <Route path='/api/login/sellers' Component={SellerSignIn}></Route>
              <Route path='/api/signup/users' Component={Signup}></Route>
              <Route path='/api/signup/sellers' Component={SellerSignUp} />
              <Route path='/api/signup/membership' Component={MemberSignUp}></Route>
              <Route path='/api/signup/admin' Component={AdminSignUp}></Route>
              <Route path='/dashboard' Component={Dashboard}></Route>
              <Route path='/shopping' Component={Shopping}></Route>
              <Route path='/terms' Component={Terms}></Route>
              <Route path='/seller/terms' Component={SellerTerm}></Route>
              <Route path='/seller/conditions' Component={SellerCondition}></Route>
              <Route path='/privacy' Component={Privacy}></Route>
              <Route path='/products' Component={Products}></Route>
              <Route path='/shipping-returns' Component={ShippingReturns}></Route>
              <Route path='/wishlist' Component={Wishlist}></Route>
              <Route path='/category' Component={Category}></Route>
              <Route path='/testimonials' Component={Testimonials}></Route>
              <Route path='/services' Component={Services}></Route>
              <Route path='/services/ai-and-ml-services' Component={AiMlServices} />
              <Route path='/services/aquaphonic' Component={Aquaponics} />
              <Route path='/services/booking-services' Component={BookingServices} />
              <Route path='/services/green-house' Component={GreenHouse} />
              <Route path='/services/soil-testing' Component={SoilTesting} />
              <Route path='/services/weed-control' Component={WeedControl} />
              <Route path='/services/pest-scanning' Component={PestScanning} />
              <Route path='/services/hydroponics' Component={Hydroponics} />
              <Route path='/cart' Component={Cart}/>
              <Route path='/payment' Component={Payment}/>
            </Routes>
          </section>
        </div>
      </Router>
    </div>
  );
}

export default App;
