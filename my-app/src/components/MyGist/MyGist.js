import GistSearch from './GistSearch.js'
import GistList from './GistList.js'
import React from 'react';

class MyGist extends React.Component {
	render() {
		return (
			<div>
				<GistSearch></GistSearch>
				<GistList></GistList>
			</div>
		);
	}
}

export default MyGist;

		