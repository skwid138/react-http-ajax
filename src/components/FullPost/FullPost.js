import React, { Component } from 'react';
import './FullPost.css';
import axios from 'axios';

class FullPost extends Component {
	state = {
		loadedPost : null
	}

	/* Without these conditional checks setting the state inside this method will */
	/* create an infinite loop and continues to send requests */
	componentDidUpdate () {
		if (this.props.id) {
			if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
				axios.get(`http://jsonplaceholder.typicode.com/posts/${this.props.id}`)
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
		axios.delete(`http://jsonplaceholder.typicode.com/posts/${this.props.id}`)
			.then(response => {
				console.log(response);
			}).catch(error => {
				console.log(error);
			});
	}

    render () {

		let post = <p style={{textAlign: 'center'}}>Please select a Post!</p>;
		if(this.props.id) {
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