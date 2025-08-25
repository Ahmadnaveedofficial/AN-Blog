import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { useSelector } from 'react-redux'


export default function Protected({
    children, authentication=true,
}) {
    const navigate=useNavigate();
    const [lodaer, setlodaer] = useState(true)
    const authStatus=useSelector((state)=>state.auth.status);
    useEffect(()=>{
             if(authStatus && authentication!==authentication) {
                navigate("/login");

                
             } else {
                
             }
    },[authStatus,navigate,authentication])
    
  return (
    <div>AuthLayout</div>
  )
}
