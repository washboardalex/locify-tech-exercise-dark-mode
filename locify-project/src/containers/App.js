import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useDarkMode from 'use-dark-mode';

import Home from '../components/Home';
import Post from '../components/Post';
import DarkModeToggle from '../components/darkmodetoggle/DarkModeToggle';



const App = () => {
  const darkMode = useDarkMode(false);

  return (
      <div style={{marginTop:'80px', marginBottom:'80px'}} className='container'>
        <Router>
            <div style={darkMode.value === true ? {border:'2px solid #dfdfdf'} : {border:'2px solid black'}  }>
              <DarkModeToggle />
              <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/:postId' component={Post} /> 
                <Route render={() => <h1>Four oh Four.</h1>} />
              </Switch>
            </div>
          </Router>
        </div>
  )
} 

export default App;