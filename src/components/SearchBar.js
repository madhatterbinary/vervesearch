import React,  { Component } from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { term: '' };
	}
	componentDidUpdate(prevProps, prevState) {
		//console.log('state at SearchBar ',prevState);
	}
	render() {
		return (
            <div className="search-bar">
                <input onChange= { event => this.onInputChange(event.target.value )} value = { this.state.term }  placeholder = 'type your search...' />
            </div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term)
	}
}