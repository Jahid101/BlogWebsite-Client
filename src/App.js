import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Main from './Components/Home/Main';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Order from './Components/Home/Order';
import Navbar from './Components/Home/Navbar';
import { useEffect, useState } from 'react';
import Dropdown from './Components/Dropdown/Dropdown';

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
        console.log('resized successfully');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('remove', hideMenu);
    }

  });

  return (
    <Router>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle}/>

      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/order" component={Order} />
      </Switch>
    </Router>
  );
}

export default App;
