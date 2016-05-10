/**
 * Created by maximradov on 5/9/16.
 */

import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions'


class Comment_box extends Component {

	constructor(props){

		super(props);

		this.state = {
			comment: ''
		}

	}

	handleChange(event){
		this.setState({
			comment: event.target.value
		})
	};

	clearTextArea(event){
		event.preventDefault();

		this.props.saveComment(this.state.comment);
		this.setState({
			comment: ''
		})
	};

	render(){

		return(
			<form onSubmit={this.clearTextArea.bind(this)} className ="comment-box">
				<textarea
					onChange={this.handleChange.bind(this)}
					value={this.state.comment}
				/>
				<button action="submit">Submit comment</button>
			</form>
		)

	}

}

export default connect(null, actions)(Comment_box);