import React, { Component } from 'react';
import './Posts.css';
// import { Link } from  'react-router-dom';
import { Route } from  'react-router-dom';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

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
		// this.setState({selectedPostId: id});

		//* history.push() *//
		/* takes a string or an object and is an alternate way to navigate instead of using links */
		// this.props.history.push(`/${id}`);
		this.props.history.push({pathname: `${id}`});
	}

	render () {
		let posts = <p style={{textAlign: 'center', color: 'red', fontWeight: 'bold'}}>Something Went Wrong!</p>

		if ( !this.state.error) {
			posts = this.state.posts.map(post => {
				return (
					// <Link to={ `/${post.id}` } key={ post.id }>
						<Post
							key={ post.id }
							title={ post.title } 
							author={ post.author }
							clicked={ () => {this.postSelectedHandler(post.id)} } />
					// </Link>
				);
			});
		}

		return (
			<div>
				<section className="Posts">
					{ posts }
				</section>
				<Route path={ this.props.match.url + '/:id' } exact component={ FullPost } />
			</div>
		);
	}
}
 
export default Posts;