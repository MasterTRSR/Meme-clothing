import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component'
import signInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';

function App() {
  return (
    <div>
      <Header></Header>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={signInSignUp} />
    </Switch>
  </div>
  );
}

export default App;
