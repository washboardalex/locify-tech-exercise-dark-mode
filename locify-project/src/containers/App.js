import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Post from '../components/Post';


const App = () => (
  
<div style={{marginTop:'80px', marginBottom:'80px'}} className='container'>
  <Router>
      <div style={{border:'2px solid black'}}>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/:postId' component={Post} /> 
          <Route render={() => <h1>Four oh Four.</h1>} />
        </Switch>
      </div>
    </Router>
  </div>
)

export default App;