import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import allReducers from './reducers/index';
import WebPage from './components/WebPage';
//import BasicExample from './components/BasicExample';

//import { Router, Route, hashHistory } from 'react-router';
//import { syncHistoryWithStore } from 'react-router-redux';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const store = createStore (allReducers);

//const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(	
  
   <Provider store={store}>
  	
  	<WebPage />
  	
  	
   </Provider>, 
  document.getElementById('fieldToShow')
);
//<Router history={history}>
      //<Route path="/" component={WebPage}/><Article /><WebPage />
      //<Router path="/about" component={About}/>
      
    //</Router> //<Route path="/books/:id" component={Track}/>
 
