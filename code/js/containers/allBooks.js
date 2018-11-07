import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';

class AllBooks extends Component {
    showList () {
		return this.props.books.map ((book) => {
			return (
				<div >
				
				
				<tr className="container_advantages" >
			
					<td className="item">
						<img src={book.img} /><br />
					</td>
					

					<td className="item" >	
						<h2>{book.name}</h2>
						<span className="desc1">Author: </span>{book.author}<br /><br />
						<span className="desc1">Discription: </span> {book.discription}	
					</td>
				</tr>
				</div>
			);
		});
			
	}

	render () {
		//if(!this.props.book) {
		//return (<div>select book..</div>);
	//}
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
 matchDispatchToProps)(AllBooks);
