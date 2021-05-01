import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Order from './components/Customer/Order/Order';
import ServiceList from './components/Customer/ServiceList/ServiceList';
import Review from './components/Customer/Review/Review';
import MakeAdmin from './components/Admin/MakeAdmin/MakeAdmin';
import AddService from './components/Admin/AddService/AddService';
import AllService from './components/Admin/AllService/AllService';
import NoMatch from './components/NoMatch/NoMatch';
import Blog from './components/Blog/Blog/Blog';
import Services from './components/Services/Services/Services';
import About from './components/About/About/About';
import OurPortfolio from './components/OurPortfolio/OurPortfolio/OurPortfolio';
import OurTeam from './components/OurTeam/OurTeam/OurTeam';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/home"><Home /></Route>
          <Route path="/login"><Login /></Route>
          <PrivateRoute path="/order"><Order /></PrivateRoute>
          <PrivateRoute path="/service list"><ServiceList /></PrivateRoute>
          <PrivateRoute path="/review"><Review /></PrivateRoute>
          <PrivateRoute path="/all service"><AllService /></PrivateRoute>
          <PrivateRoute path="/add service"><AddService /></PrivateRoute>
          <PrivateRoute path="/make admin"><MakeAdmin /></PrivateRoute>
          <Route path="/about"><About /></Route>
          <Route path="/services"><Services /></Route>
          <Route path="/ourPortfolio"><OurPortfolio /></Route>
          <Route path="/outTeam"><OurTeam showMoreDev /></Route>
          <Route path="/blogs"><Blog showAllBlogs /></Route>
          <Route path="*"><NoMatch /></Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
