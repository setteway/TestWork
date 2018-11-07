import {combineReducers} from 'redux';
import BooksReducers from './books';
import ActiveBook from './book-active';
import { routerReducer } from 'react-router-redux';
import AllBooksSellected from './AllBooksSellected';

const allReducers = combineReducers ({
	//routing: routerReducer,
	books: BooksReducers,
	active: ActiveBook,
	AllBooksSellected: AllBooksSellected
});

export default allReducers;