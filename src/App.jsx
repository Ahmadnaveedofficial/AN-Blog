// import './App.css'
// import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import authService from './appwrite/auth';
// import { login, logout } from './store/authSlice';
// import Header from './component/Header/Header';
// import Footer from './component/Footer/Footer';
// import { Link, Outlet } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// function App() {
//   const [loading, setLoading] = useState(true);
//   const dispatch = useDispatch();
//    const navigate = useNavigate(); 

//   useEffect(() => {
//     authService.getCurrentUser()
//       .then((user) => {
//         if (user) {
//           dispatch(login({ user }));
//           navigate('/all-posts');
//         } else {
//           dispatch(logout());
//           navigate('/');
         
//         }
//       })
//       .catch((error) => {
//          dispatch(logout());
//         console.error("Error fetching current user:", error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, [dispatch]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <p className="text-xl font-semibold">Loading...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-400 font-serif font-extrabold">
//       <Header />
//       <main className="flex-grow">
//         <Outlet />  
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;


import './App.css'
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    authService.getCurrentUser()
      .then((user) => {
        if (user) {
          dispatch(login({ user }));
          navigate('/all-posts');
        } else {
          dispatch(logout());
          navigate('/');
        }
      })
      .catch((error) => {
        dispatch(logout());
        console.error("Error fetching current user:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dispatch]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="fixed inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>
        <div className="fixed top-32 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
        <div className="fixed bottom-32 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none"></div>
        
        {/* Loading content */}
        <div className="relative z-10 text-center">
          <div className="rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 backdrop-blur-xl border border-slate-700/30 w-20 h-20 flex items-center justify-center mx-auto mb-6 animate-spin">
            <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <p className="text-xl font-semibold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-gray-100 font-sans relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>
      <div className="fixed top-32 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
      <div className="fixed bottom-32 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000 pointer-events-none"></div>
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-r from-cyan-500/3 to-emerald-500/3 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import authService from "./appwrite/auth";
// import { login, logout } from "./store/authSlice";
// import Header from "./component/Header/Header";
// import Footer from "./component/Footer/Footer";
// import { Outlet, useNavigate } from "react-router-dom";

// function App() {
//   const [loading, setLoading] = useState(true);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchUser = async () => {
//       const user = await authService.getCurrentUser();
//       if (user) {
//         dispatch(login({ user }));
//       } else {
//         dispatch(logout());
//         // Optional: redirect unauthenticated users to login
//         if (window.location.pathname !== "/login" && window.location.pathname !== "/signup") {
//           navigate("/login");
//         }
//       }
//       setLoading(false);
//     };

//     fetchUser();
//   }, [dispatch, navigate]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <p className="text-xl font-semibold">Loading...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-400 font-serif font-extrabold">
//       <Header />
//       <main className="flex-grow">
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;
