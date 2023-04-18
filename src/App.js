import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component.tsx';
import Navigation from './routes/navigation/navigation.component.tsx';
import Authentication from './routes/authentication/authentication.component';
import Checkout from './routes/checkout/checkout.component';
import Saved from './routes/saved/saved.component.tsx';
import Shop from './routes/shop/shop.component';
import { checkUserSession } from './store/user/user.action';



const  App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
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
