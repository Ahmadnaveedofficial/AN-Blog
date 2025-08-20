import './App.css'
import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import authService from './appwrite/auth';
import { login,logout } from './store/authSlice';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import { Outlet } from 'react-router-dom';

// Main App component
// This component initializes the application, checks for the current user,
// and sets up the Redux store for state management.
// It also includes the Header and Footer components for layout.
// The main content is wrapped in a div with a minimum height and background color.
// The Outlet component is used for rendering nested routes if needed.


function App() {
  const [loading, setLoading] = useState(true);
   const dispatch = useDispatch();
  useEffect(()=>{
    authService.getCurrentUser()
    .then((user)=>{
     if(user){
        dispatch(login({user}));
      }
      else{
        dispatch(logout());
      }
    })
    .finally(()=>{
      setLoading(false);
    })
    .catch((error)=>{
      console.error("Error fetching current user:", error);
      setLoading(false);
    });
  },[])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400 font-serif font-extrabold' > hello 
    <div className='w-full block'>
      <Header/>
      <main>
          {/* <Outlet/> */}
      </main>
      <Footer/>
    </div>
    </div>
  ): null
}

export default App
