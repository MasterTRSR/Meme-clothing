import React, { useEffect, useState } from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component'
import signInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth } from './firebase/firebase.utils';

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      console.log(currentUser);
    });
  }, [currentUser])
  return (
    <div>
      <Header currentUser={currentUser}></Header>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={signInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
