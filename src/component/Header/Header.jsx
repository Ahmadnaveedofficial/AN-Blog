import React, { act, use } from 'react'
import { Logo, Container, Logout } from "../index"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Header() {
  const authStatus = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();
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
    <header className=''>
      <Container>
        <nav>
          <div>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>
          <ul className='flex ml-auto'>
               {naItems.map((item) =>
                item.active ? (
                  <li key={item.name}>
                    <button onClick={()=>navigate(item.link)}>{item.name}</button>
                  </li>
                ) : null  
              )}
              {authStatus && (
                <li>
                  <Logout/>
                </li>
              )}
          </ul>
        </nav>
      </Container>
    </header>

  )
}

export default Header