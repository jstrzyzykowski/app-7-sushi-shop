import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import Home from '../../pages/Home/Home';
import NotFound from '../../pages/NotFound/NotFound';
import Footer from '../Footer/Footer';
import Details from '../../pages/Details/Details';
import Checkout from '../../pages/Checkout/Checkout';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation/>
        <Switch>
          <Route path='/' exact render={() => <Redirect to='/shop'/>}/>  
          <Route path='/shop' exact component={Home} />
          <Route path='/shop/product-details/:productId' component={Details}/>
          <Route path='/shop/checkout/checkorders' component={Checkout}/>
          <Route component={NotFound}/>
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
