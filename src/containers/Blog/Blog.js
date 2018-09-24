import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
// import { Route, Link, NavLink, Switch } from 'react-router-dom';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost';

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

//* Switch *//
/* Wraps routes and will prevent multiple routes from loading at the same time */
/* Goes from top down so the order is important */

//* Nested Routes *//
/* nested routes need to have the full path as a prop, this can be done dynamically with this.props.match.url */

//* Redirect *//
/* if used inside a switch needs two props FROM (url the user hits) and TO (url the user should be redirected to) */
/* Outside of a switch all that's needed is the TO prop */

//* Gaurd *//
/* Prevent non auth'd users from accessing content they shouldn't see */




class Blog extends Component {
	state = {
		auth: false,
	}

    render () {
        return (
            <div className="Blog">
				<header>
					<nav>
						<ul>
							<li><NavLink to="/posts/" exact 
								activeClassName="hyperactive" 
								activeStyle={{textDecoration: 'underline'}} >Posts
								</NavLink>
							</li>
							{/* <li><Link to="/new-post">New Post</Link></li> */}
							<li>
								<NavLink to={{
									pathname: '/new-post',
									hash: '#submit',
									search: '?quick-submit=true',
								}}>New Post</NavLink>
							</li>
							<li><NavLink to="/404">Bad Page will 404</NavLink></li>
							<li><button onClick={ () => this.setState({auth: true}) }>Authenticate to access New Posts</button></li>
						</ul>
					</nav>
				</header>
				{/* <Route path="/" exact render={ () => <h1>Howdy!<h1/> } /> */}
				{/* <Route path="/" exact component={ Posts } /> */}
				<Switch>
					{ this.state.auth ? <Route path="/new-post" component={ NewPost } /> : null }
					<Route path="/posts" component={ Posts } />
					{/* <Route path="/" exact component={ Posts } />  This is a way to have multiple routes load the same component */}
					{/* <Route path="/:id" exact component={ FullPost } /> */}

					{/* The below are both catch alls  */}
					<Route render={ () => <h1>404 NOT FOUND!</h1>} />
					<Redirect from="/" to="/posts" />

				</Switch>
            </div>
        );
    }
}

export default Blog;
