import React, { useState, useEffect } from 'react'
import { Logo, Container, Logout } from "../index"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const authStatus = useSelector((state) => state.auth?.status);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const naItems = [{
    name: "Home",
    link: "/",
    active: !authStatus ,
  },

  {
    name: "About Us",
    link: "/about",
    active: !authStatus,
  },
    {
    name: "Login",
    link: "/login",
    active: !authStatus,
  },
  {
    name: "Signup",
    link: "/signup",
    active: !authStatus,
  },
  {
    name: "All Posts",
    link: "/all-posts",
    active: authStatus,
  },
  {
    name: "Add Post",
    link: "/add-post",
    active: authStatus,
  },];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      isScrolled 
        ? 'bg-slate-900/98 backdrop-blur-xl shadow-2xl shadow-slate-900/40 border-b border-slate-700/30' 
        : 'bg-slate-900/85 backdrop-blur-md'
    }`}>
      <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 via-cyan-500 to-emerald-500 animate-pulse"></div>
      
      <Container>
        <nav className='flex items-center justify-between py-4'>
          <div className='flex-shrink-0'>
            <Link to='/' className='inline-block hover:opacity-80 hover:scale-105 transition-all duration-300 hover:drop-shadow-lg'>
              <Logo width='70px' />
            </Link>
          </div>
          <ul className='hidden md:flex ml-auto items-center space-x-2'>
               {naItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button 
                      onClick={()=>navigate(item.link)}
                      className='text-slate-200 hover:text-white transition-all duration-300 font-medium relative group px-4 py-2.5 rounded-full hover:bg-slate-800/50 hover:shadow-lg hover:shadow-blue-500/10 hover:scale-105 active:scale-95'
                    >
                      {item.name}
                      <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 group-hover:w-3/4 transition-all duration-500 rounded-full"></span>
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-cyan-500/5 transition-all duration-300"></span>
                    </button>
                  </li>
                ) : null
                )}
              {authStatus && (
                <li className='ml-6'>
                  <div className="pl-6 border-l border-slate-700/50">
                    <Logout/>
                  </div>
                </li>
              )}
          </ul>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-12 h-12 flex items-center justify-center text-slate-200 hover:text-white transition-all duration-300 ml-auto rounded-full hover:bg-slate-800/50 hover:scale-110 active:scale-95 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <svg className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>
        <div className={`md:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100 pb-8' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-gradient-to-r from-slate-700/30 via-slate-600/50 to-slate-700/30 pt-6 space-y-2">
            {naItems.map((item, index) =>
              item.active ? (
                <button 
                  key={item.name}
                  onClick={() => {
                    navigate(item.link);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left text-slate-200 hover:text-white transition-all duration-300 font-medium py-4 px-4 hover:bg-gradient-to-r hover:from-slate-800/30 hover:via-slate-700/50 hover:to-slate-800/30 rounded-xl hover:shadow-lg hover:shadow-blue-500/10 hover:scale-[1.02] active:scale-[0.98] transform hover:translate-x-2`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <span className="flex items-center space-x-3">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity duration-300 hover:opacity-100"></span>
                    <span>{item.name}</span>
                  </span>
                </button>
              ) : null
            )}
            {authStatus && (
              <div className='pt-6 border-t border-slate-700/30 mt-6'>
                <div className="px-4">
                  <Logout/>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
   )
}

export default Header