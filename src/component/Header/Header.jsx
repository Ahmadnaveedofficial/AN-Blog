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
    active: true,
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg shadow-slate-900/20' 
        : 'bg-slate-900/80 backdrop-blur-sm'
    }`}>
      {/* Gradient accent line */}
      <div className="h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500"></div>
      
      <Container>
        <nav className='flex items-center justify-between py-4'>
          <div className='flex-shrink-0'>
            <Link to='/' className='inline-block hover:opacity-80 transition-opacity duration-200'>
              <Logo width='70px' />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className='hidden md:flex ml-auto items-center space-x-8'>
               {naItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button 
                      onClick={()=>navigate(item.link)}
                      className='text-white hover:text-blue-400 transition-colors duration-200 font-medium relative group px-2 py-1'
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                    </button>
                  </li>
                ) : null
                )}
              {authStatus && (
                <li className='ml-4'>
                  <Logout/>
                </li>
              )}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white hover:text-blue-400 transition-colors duration-200 ml-auto"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-slate-700/50 pt-4 space-y-2">
            {naItems.map((item) =>
              item.active ? (
                <button 
                  key={item.name}
                  onClick={() => {
                    navigate(item.link);
                    setIsMobileMenuOpen(false);
                  }}
                  className='block w-full text-left text-white hover:text-blue-400 transition-colors duration-200 font-medium py-3 px-2 hover:bg-slate-800/50 rounded-lg'
                >
                  {item.name}
                </button>
              ) : null
            )}
            {authStatus && (
              <div className='pt-4 border-t border-slate-700/50 mt-4'>
                <Logout/>
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
   )
}

export default Header