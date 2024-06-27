import React from 'react';
import Homescreen from './AllScreens/homescreen';
import Login from './AllScreens/Login.js';
import { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

import Profile from './AllScreens/Profile';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))

      }
      else {
        //loggedOut
        dispatch(logout())
      }
    })
    return unsubscribe
  }, [dispatch])

  return (

    <div className='app'>



      <BrowserRouter>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path="/" element={<Homescreen />} />
          </Routes>

        )}
      </BrowserRouter>
    </div>



  );
}

export default App;
