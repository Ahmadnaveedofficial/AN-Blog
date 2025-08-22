import React from 'react';
import {useDispatch} from 'react-redux';
import authServices from '../../appwrite/config';
import {logout} from '../../store/authSlice';

function Logout() {
    const dispatch = useDispatch();
    const handleLogout=()=>{
        authServices.logout().then(()=>{
            dispatch(logout());
        })
    }
  return (
  <button onClick={handleLogout}   className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:scale-95">Logout</button>
  )
}

export default Logout