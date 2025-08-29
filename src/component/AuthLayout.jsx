import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'


export default function Protected({
  children, authentication = true,
}) {
  const navigate = useNavigate();
  const [lodaer, setlodaer] = useState(true)
  const authStatus = useSelector((state) => state.auth.status);
  useEffect(() => {
    // if (authStatus && authentication !== authentication) {
    //   navigate("/login");
    // } else if (authStatus && authentication !== authentication) {
    //   navigate("/");
    // }
      if (authentication && !authStatus) {
      navigate("/login");
    }
    else if (!authentication && authStatus) {
      navigate("/");
    }
    setlodaer(false)

  }, [authStatus, navigate, authentication])

  return   lodaer ? <div className='min-h-[calc(100vh-80px)] flex justify-center items-center'>Loading...</div> : <>{children}
</>
}