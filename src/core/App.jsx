import { Pages } from "./Pages.jsx";
import { Routes, Route, useLocation } from 'react-router';

import './App.scss'

function App() {
  //Check the client's system theme
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const root = document.documentElement;
  //Set the theme attribute on the document root
  root.setAttribute('theme', prefersDark ? 'dark' : 'light');

  /*
    Find the current page and assign a CSS-friendly class name
    This lets pages style them if necessary
  */ 
  const location = useLocation();
  const pageClass = location.pathname === '/' ? 'home' : location.pathname.replace(/^\/|\/$/g, '');

  //Construct the routes dynamically using the pages array
  return (
    <>
      <div id="page" className={`${pageClass}`}>
          <Routes>
            {Pages.map(page => (
              <Route key={page.path} path={page.path} element={page.element} />
            ))}
          </Routes>
      </div>
    </>
  )
}

export default App
