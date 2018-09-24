import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './NewPost.css';
import axios from 'axios';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
		author: 'Hunter',
		submitted: false,
	}

	componentDidMount () {
		//if user is not auth'd, then redirect
		//this.props.history.replace('/posts');

		console.log('[NewPost -> props]', this.props);
	}
	
	postDataHandler = () => {
		const postData = {
			title: this.state.title,
			body: this.state.content,
			author: this.state.author
		};
		axios.post('/posts', postData)
			.then(response => {
				console.log(response);
				this.props.history.push('/posts'); //* This way of doing things allows the user to use the back button in the browser
				// this.props.history.replace('/posts'); //* This way is the same as conditionally redirecting like what's happening in the render
				// this.setState({submitted: true});
			});

	}

    render () {

		/* Conditionally redirecting if the new post is successfully created */
		let redirect = null;
		if (this.state.submitted) {
			redirect = <Redirect to="/posts" />
		}

        return (
            <div className="NewPost">
				{ redirect }
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Hunter">Hunter</option>
                    <option value="Banjo">Banjo</option>
					<option value="Nebuchadnezzar">Nebuchadnezzar</option>
                </select>
                <button onClick={ this.postDataHandler }>Add Post</button>
            </div>
        );
    }
}

export default NewPost;