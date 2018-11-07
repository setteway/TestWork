import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';


// onClick={() => this.props.select (book)} key={book.id}
class BooksList extends Component {
	showList () {
		return this.props.books.map ((book) => {
			return (
				<div onClick={() => this.props.select (book)} key={book.id}>
				{book.id + '. ' + book.name}
				</div>
			);
		});
			
	}

	render () {
		return (
			<div>
				{this.showList ()}
				
			</div>	

		);
	}
}

function mapStateToProps (state) {
	return {
		books: state.books
	};
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({select: select}, dispatch)
}


export default connect(mapStateToProps,
 matchDispatchToProps)(BooksList);
