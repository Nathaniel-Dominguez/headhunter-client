import axios from 'axios';
import React, { Component } from 'react';
import SERVER_URL from './constants/server';
import TimeLine from './Timeline';
import TodoInput from './TodoInput';

export default class Home extends Component {

	componentDidMount = () => {
		axios.post(SERVER_URL + '/timeline/info', 'something')
		.then(result => {
			console.log(result)
		})
		.catch(err => {
			console.log(err)
		})
	}
	// handleChange = (e) => {
 //    	this.setState({ [e.target.name]: e.target.value })
 //  	}

	handleSubmit = (task) => {
		console.log('adding task:', task)
	    // Ensure a todo was actually entered before submitting
	    // axios post goes here
	    axios.post(SERVER_URL + '/timeline/new', task)
			.then(result => {
				console.log(result)
			})
			.catch(err => {
				console.log(err)
		})
  	}

  	render() {
    	return(
			<div>
				<TodoInput handleSubmit={this.handleSubmit}/>
				<TimeLine />
  			</div>
      	)
  }
}