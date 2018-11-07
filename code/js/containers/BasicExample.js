import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectAll} from '../actions/index';
import AllBooks from '../containers/allBooks';
import BooksList from '../containers/books-list';
import Details from '../containers/details';


function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Список книг</Link>
          </li>
          
          <li>
            <Link to="/api">api</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Home} />
       
        <Route path="/api" component={api} />
      </div>
    </Router>
  );
}
function Home() {
  return (
    <div>
      <h2>Список книг:</h2>
      <BooksList />
    </div>
  );
}

function About() {
  return (
    <div>
      <AllBooks />
    </div>
  );
}

function api({ match }) {
  return (
    <div>
      <h2>api</h2>
      <ul>
        <li>
          <Link to={`${match.url}/books`}>Вывести все книги </Link>
        </li>
        <li>
          <Link to={`${match.url}/:id`}>Получить книгу по id</Link>
        </li>
      </ul>


      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        
      />
      <Route path='/api/books' component={About} />
      <Route path='/api/:id' component={IdFind} />
    </div>
  );
}



function IdFind() {
  return (
    <div>
      <h2>Список книг:</h2>
      <BooksList />
      <Details />
      
      
    </div>
  );
}


function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
     
    </div>
  );
}

export default BasicExample;