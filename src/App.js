import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { createUserDocumentFromAuth, onAuthStateChangedListener } from './utils/firebase/firebase.utils.js';
import { setCurrentUser } from './store/user/user.action'
import Home from './routes/home/home.component.jsx';
import Navigation from './routes/navigation/navigation.component.jsx';
import Authentication from './routes/authentication/authentication.component';
import Checkout from './routes/checkout/checkout.component';
import Saved from './routes/saved/saved.component.jsx';
import Shop from './routes/shop/shop.component';




const  App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/> }/>
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='saved' element={<Saved />} />
      </Route>

    </Routes>
  );
}

export default App;
