import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Blog from './containers/Blog/Blog';

/* Wrapping the entire app in Browser Router allows the */
/* wrapped components to access routing features */

//* If the server isn't serving the app from / and it's from /another-dir instead then BrowserRouter needs a basename prop with the correct path *//
/* ie "/another-dir" */

class App extends Component {
  render() {
    return (
		<BrowserRouter basename="/">
			<div className="App">
        		<Blog />
      		</div>
		</BrowserRouter>
    );
  }
}

export default App;