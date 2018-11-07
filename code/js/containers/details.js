import React, {Component} from 'react';
import {connect} from 'react-redux';


class Details extends Component {  //
render () {
	if(!this.props.book) {
		return (<p></p>);
	}
		return (
			<div>

				<tr className="container_advantages" >
			
					<td className="item">
						<img src={this.props.book.img} /><br />
					</td>
					

					<td className="item" >	
						<h2>{this.props.book.name}</h2>
						<span className="desc1">Author: </span>{this.props.book.author}<br /><br />
						<span className="desc1">Discription: </span> {this.props.book.discription}	
					</td>
				</tr>
					
			</div>		

		);
	}
}




function mapStateToProps (state) {
	return {
		book: state.active
	};
}

export default connect(mapStateToProps)(Details);