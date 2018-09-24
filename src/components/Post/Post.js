import React from 'react';
import { withRouter } from 'react-router-dom';
import './Post.css';

//* withRouter *//
/* makes a component/container route aware */
/* This means it will now also have the props route adds to the containing component */

const post = props => (
    <article className="Post" onClick={ props.clicked }>
        <h1>{ props.title }</h1>
        <div className="Info">
            <div className="Author">{ props.author }</div>
        </div>
    </article>
);

export default withRouter(post);