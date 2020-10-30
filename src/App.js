import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Header'
import './App.css';
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import { useStateValue } from './StateProvider'
import { auth } from "./firebase";

function App() {
  const [{ basket }, dispatch] = useStateValue()




  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({ type: 'SET_USER', payload: authUser.email })
      } else {
        dispatch({ type: 'SET_USER', payload: null })
      }
    })
    return () => unsubscribe()
  }, [])





  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/'>
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>

    </Router>
  );
}

export default App;
