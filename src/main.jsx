// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { RouterProvider } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import store from './store/store.js'
// import { createBrowserRouter } from 'react-router-dom';
// import { AuthLayout, Login, SignUp } from './component/index.js'
// import Home from './component/Pages/Home.jsx'
// import Allpost from './component/Pages/Allpost.jsx'
// import EditPost from './component/Pages/EditPost.jsx'
// import AddPost from './component/Pages/AddPost.jsx'
// import Post from './component/Pages/Post.jsx'
// import AboutMe from './component/Pages/Aboutme.jsx'



// const router = createBrowserRouter([{
//   path: "/",
//   element: <App />,
//   children: [
//     {
//       path: "/",
//       element: <Home />
//     },  {
//        path: "/about", 
//        element: <AboutMe /> },
//     {
//       path: "/login",
//       element: (
//         <AuthLayout authentication={false} >
//           <Login/>
//         </AuthLayout>
//       )
//     }, {
//       path: "/signup",
//       element: (
//         <AuthLayout authentication >
//           {" "}
//           <SignUp/>
//         </AuthLayout>
//       )
//     }, {
//       path: "/all-posts",
//       element: (
//         <AuthLayout authentication>
//           {" "}
//           <Allpost/>
//         </AuthLayout>
//       )
//     }, {
//       path: "/add-post",
//       element: (
//         <AuthLayout authentication>
//           {" "}
//           <AddPost/>
//         </AuthLayout>
//       )
//     }, {
//       path: "/edit-post/:slug",
//       element: (
//         <AuthLayout authentication >
//           {" "}
//           <EditPost/>
//         </AuthLayout>
//       )
//     }, {
//       path: "/post/:slug",
//       element: <Post/>,
//     },
//   ]
// }]);


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <RouterProvider router={router} />
//     </Provider>
//   </React.StrictMode>,
// )

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import store from './store/store.js';
import App from './App.jsx';

import { AuthLayout, Login, SignUp } from './component/index.js';
import Home from './component/Pages/Home.jsx';
import Allpost from './component/Pages/Allpost.jsx';
import EditPost from './component/Pages/EditPost.jsx';
import AddPost from './component/Pages/AddPost.jsx';
import Post from './component/Pages/Post.jsx';
import AboutMe from './component/Pages/Aboutme.jsx';

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <AboutMe /> },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <SignUp />
          </AuthLayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout authentication={true}>
            <Allpost />
          </AuthLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication={true}>
            <AddPost />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication={true}>
            <EditPost />
          </AuthLayout>
        ),
      },
      { path: "/post/:slug", element: <Post /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
