import React from 'react';
import {Route} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'; 
// import logo from './logo.svg';
import './App.css';
import Main from './component/Main'
import Resume from './component/Resume';
import Portfolio from './component/Portfolio';
import Contact from './component/Contact';

function App() {
  return (
    <div>
    <CssBaseline /> 
       <Route exact path='/' component={Main} />
       <Route path='/resume' component={Resume} />
       <Route path='/portfolios' component={Portfolio} />
       <Route path='/contacts' component={Contact} />
    </div>
  );
}

export default App;
