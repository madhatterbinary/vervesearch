import React, { Component } from 'react';
import ReactDOM from "react-dom";
import SearchBar from '../components/SearchBar';
import VideoList from '../components/VideoList';
import VideoDetail from '../components/VideoDetail';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';
import _ from 'lodash';


class App extends Component { 
	constructor(props) {
		super(props);
	}
	componentWillMount(){
		this.props.onInitVideos('verve search');
	}
	render() {
		if (this.props.videos.length === 0) {		
			return <dv/>;
		} else {			
			const videoSearch = _.debounce((term) => { this.props.onInitVideos(term)}, 300);
			return (
			<div>
			<SearchBar onSearchTermChange={videoSearch} />
			<VideoDetail video={this.props.selectedVideo} />
			<VideoList onVideoSelect={selectedVideo => this.props.onSelectedVideo(selectedVideo)}
			           videos={this.props.videos} />
			</div>
		    );
		}	
	}
}
const mapStateToProps = state => {
    return {
        videos: state.videos,
        selectedVideo: state.selectedVideo
    }
};
const mapDispatchToProps = dispatch => {
	return {
		onInitVideos: (api) => dispatch(actions.initVideoSearch(api)),
		onSelectedVideo: (selectedVideo) => dispatch(actions.selectedVideo(selectedVideo))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

