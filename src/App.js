import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route  
} from "react-router-dom";
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import AuthProvider from './component/contexts/AuthProvider';
import Login from './component/Login/Login';
import Details from './component/Details/Details';
import AddServices from './component/AddServices/AddServices';
import MyOrder from './component/MyOrder/MyOrder';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AllOrders from './component/AllOrders/AllOrders';
import NotFound from './component/NotFound/NotFound';
import AboutUs from './component/AboutUs/AboutUs';





function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>                 
          <Route path='/addservice'>
            <AddServices></AddServices>
          </Route>
          <Route path='/myorder'>
            <MyOrder></MyOrder>
          </Route>
          
          <PrivateRoute path="/details/:serviceId">
            <Details></Details>
          </PrivateRoute>          
          <Route path="/allorder">
            <AllOrders></AllOrders>
          </Route>          
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>          
          <Route path="/login">
            <Login></Login>
          </Route>          
          <Route path="*">
            <NotFound></NotFound>
          </Route>          
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
      </div>
  );
}

export default App;
