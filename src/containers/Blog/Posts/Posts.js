import React, { Component } from 'react';
import './Posts.css';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';

class Posts extends Component {
	state = {
		posts: [],
	}

	componentDidMount () {
		console.log('[Posts -> props]', this.props);
		
		axios.get(`/posts/`)
			.then(response => {
				// show 4 posts
				const posts = response.data.slice(0, 4);
				const updatedPosts = posts.map(post => {
					return {
						...post,
						author: 'Jemima'
					}
				})
				this.setState({posts: updatedPosts});
			}).catch(error => {
				console.log(error);
			});
	}

	postSelectedHandler = id => {
		this.setState({selectedPostId: id});
	}

	render () {
		let posts = <p style={{textAlign: 'center', color: 'red', fontWeight: 'bold'}}>Something Went Wrong!</p>

		if ( !this.state.error) {
			posts = this.state.posts.map(post => {
				return <Post 
					key={ post.id } 
					title={ post.title } 
					author={ post.author }
					clicked={ () => {this.postSelectedHandler(post.id)} } />;
			});
		}

		return (
			<section className="Posts">
				{ posts }
			</section>
		);
	}
}
 
export default Posts;