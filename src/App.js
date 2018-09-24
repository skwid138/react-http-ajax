import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Blog from './containers/Blog/Blog';

/* Wrapping the entire app in Browser Router allows the */
/* wrapped components to access routing features */

class App extends Component {
  render() {
    return (
		<BrowserRouter>
			<div className="App">
        		<Blog />
      		</div>
		</BrowserRouter>
    );
  }
}

export default App;