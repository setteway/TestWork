import React from 'react';
import BooksList from'../containers/books-list';
import Details from'../containers/details';
import BasicExample from '../containers/BasicExample';
import AllBooks from '../containers/allBooks';

    

 function Article() {
  const body = <section>Footer</section> 
 return(
      <div className="hello" style={{color:"red"}}>
        <h2>title</h2>
        <section>body</section> 
        { body }
        <h3 style={{color:"red"}}>
         "creation date : "{ (new Date()).toDateString()}
        </h3>
      </div>
    );
}


const WebPage = () => (
	<div>
    <BasicExample />  
		
    
    
	</div>
);

export default WebPage;
