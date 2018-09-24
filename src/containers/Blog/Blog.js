import React, { Component } from 'react';
import { Route, Link, NavLink } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

//* Route *//
/* Needs at least two props, path and (render or component) which is a reference to a function/class */
/* The exact prop makes the path match exactly, by default this is false and it just checks that the path begins with the route */
/* Multiple routes can be used, it seems to be similar to a conditional */
//! Additional props are passed along to the routed components (history, location, and match) !//

//* Link *//
/* used instead of anchor tags to avoid reloading the page, takes a to prop which is similar to href */
/* to can also take a JS object with pathname, hash, and search property keys to dynamically build the url */
/* The pathname is always absolute and is appended to the base url even if it is missing the beginning slash */
/* this.props.match.url + '/new-path' is how a relative path can be created */

//* NavLink *//
/* can be used in place of Link and adds an active class to the anchor it creates */
/* the active class name can be set to a custom class name using activeClassName prop */
/* activeStyle is another prop that can be used similar to inline styles */



class Blog extends Component {
    render () {
        return (
            <div className="Blog">
				<header>
					<nav>
						<ul>
							<li><NavLink exact activeClassName="hyperactive" activeStyle={{textDecoration: 'underline'}} to="/">Home</NavLink></li>
							{/* <li><Link to="/new-post">New Post</Link></li> */}
							<li>
								<NavLink to={{
									pathname: '/new-post',
									hash: '#submit',
									search: '?quick-submit=true',
								}}>New Post</NavLink>
							</li>
						</ul>
					</nav>
				</header>
				{/* <Route path="/" exact render={ () => <h1>Howdy!<h1/> } /> */}
				<Route path="/" exact component={ Posts } />
				<Route path="/new-post" component={ NewPost } />
            </div>
        );
    }
}

export default Blog;
