import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
	constructor () {
		super();
		this.state = {
			monsters    : [],
			searchField : ''
		};
	}

	componentDidMount () {
		fetch('http://jsonplaceholder.typicode.com/users').then((response) => response.json()).then((users) =>
			this.setState({
				monsters : users
			})
		);
	}
	render () {
		const monsters = this.state.monsters;
		const searchField = this.state.searchField;
		const filterMonsters = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase())
		);
		return (
			<div className='App'>

					<SearchBox placeholder="Search Something" handlerchange={e=>this.setState({searchField:e.target.value})}>

					</SearchBox>
				<CardList monsters={filterMonsters} />
			</div>
		);
	}
}

export default App;
