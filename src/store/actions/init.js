const API_KEY = 'AIzaSyA0Av5Hy_PdaRLGAkEyUS7sFi8DFvrCujo';
import * as actionTypes from './actionTypes';
import YTSearch from 'youtube-api-search';

export const setInitVideos = ( videos ) => {
	return {
	    type: actionTypes.SET_INIT_VIDEOS,
	    videosArr: {videos:videos, selectedVideo:videos[0]}
	};
};
export const initVideoSearch = (term) => {
	return dispatch => {
			YTSearch({ key: API_KEY, term: term, maxResults: 5}, (videos) => {
				dispatch(setInitVideos(videos));
			});				
	}
}
export const selectedVideo = (video) => {
	return {
	    type: actionTypes.SELECTED_VIDEO,
	    selectedVideo: video
	};
}

