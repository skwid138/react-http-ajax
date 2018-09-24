import React, { Component } from 'react';
import './FullPost.css';
import axios from 'axios';

class FullPost extends Component {
	state = {
		loadedPost : null
	}

	//* Routing *//
	/* Now that routing is setup, this.props.id must be replaced to use the route params this.props.match.params.id */
	/* componentDidMount() will not be executed on a route change if the component was already mounted */
	/* Instead used componentDidUpdate() */

	/* Without these conditional checks setting the state inside this method will */
	/* create an infinite loop and continues to send requests */
	componentDidMount () {
		this.loadData();
	}

	componentDidUpdate () {
		this.loadData();
	}

	loadData () {
		if (this.props.match.params.id) {
			// The + operator indicates it's a number instead of a string like it actually is
			if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id)) {
				axios.get(`/posts/${this.props.match.params.id}`)
					.then(response => {
						//console.log(response);
						this.setState({loadedPost:response.data})
					}).catch(error => {
						console.log(error);
					});
			}
		}
	}

	deletePostHandler = () => {
		axios.delete(`/posts/${this.props.match.params.id}`)
			.then(response => {
				console.log(response);
			}).catch(error => {
				console.log(error);
			});
	}

    render () {

		let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
		if(this.props.match.params.id) {
			post= <p style={{textAlign: 'center'}}>Loading...!</p>
		}
		if (this.state.loadedPost) {
			post = (
				<div className="FullPost">
					<h1>{ this.state.loadedPost.title }</h1>
					<p>{ this.state.loadedPost.body }</p>
					<div className="Edit">
						<button className="Delete" onClick={ this.deletePostHandler }>Delete</button>
					</div>
				</div>
	
			);
		}
		return post;
    }
}

export default FullPost;