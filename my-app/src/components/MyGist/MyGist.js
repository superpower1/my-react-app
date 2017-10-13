import GistSearch from './GistSearch.js'
import GistList from './GistList.js'
import React from 'react';

class MyGist extends React.Component {
	render() {
		return (
			<div className="container">
				<section className="jumbotron">
			      <h3 className="jumbotron-heading">Search Github Users</h3>
			      <GistSearch></GistSearch>
			    </section>
			    <GistList></GistList>
		    </div>
		);
	}
}

export default MyGist;

		