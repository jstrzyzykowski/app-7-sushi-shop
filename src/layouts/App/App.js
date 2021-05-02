import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Navigation from '../Navigation/Navigation';
import Gallery from '../../pages/Gallery/Gallery';
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
          <Route path='/shop' exact component={Gallery} />
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
