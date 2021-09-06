import './App.css';
import Login from './Components/Login/Login';
import Error from './Components/Error/Error';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Register from './Components/Register/Register';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Homepage from './Components/Home/Homepage/Homepage';
import Navbar from './Components/Home/Navbar/Navbar';
import Main from './Components/Dashboard/Main/Main';
import AddBlog from './Components/Dashboard/AddBlog/AddBlog';
import ManageBlog from './Components/Dashboard/ManageBlog/ManageBlog';
import Feedback from './Components/Dashboard/Feedback/Feedback';
import ShowBlog from './Components/ShowBlog/ShowBlog';
import Blog from './Components/Home/Blog/Blog';
import AddAdmin from './Components/Dashboard/AddAdmin/AddAdmin';
import Footer from './Components/Home/Footer/Footer';
import Subscribe from './Components/Subscribe/Subscribe';


export const UserContext = createContext();


function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Homepage></Homepage>
          </Route>
          <Route path="/home">
            <Homepage></Homepage>
          </Route>
          <Route path="/subscribe">
            <Subscribe></Subscribe>
          </Route>
          <Route path="/contact">
            <Footer></Footer>
          </Route>
          <Route path="/fashion">
            <Blog></Blog>
          </Route>
          <Route path="/travel">
            <Blog></Blog>
          </Route>
          <Route path="/culture">
            <Blog></Blog>
          </Route>
          <Route path="/photography">
            <Blog></Blog>
          </Route>
          <PrivateRoute path="/sports">
            <Blog></Blog>
          </PrivateRoute>
          <PrivateRoute path="/international">
            <Blog></Blog>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Main></Main>
          </PrivateRoute>
          <Route path="/showBlog/:id">
            <ShowBlog></ShowBlog>
          </Route>
          <PrivateRoute path="/addBlog">
            <AddBlog></AddBlog>
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute path="/manageBlog">
            <ManageBlog></ManageBlog>
          </PrivateRoute>
          <PrivateRoute path="/feedback">
            <Feedback></Feedback>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
