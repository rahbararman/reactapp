import React from 'react';
import Cardlist from '../components/Cardlist';
import SearchBox from '../components/SearchBox';



class App extends React.Component {
	constructor(){
		super()
		this.state = {
			robots: [],
			searchField: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}));
	}

	onSearchChange = (event) => {
		this.setState({searchField: event.target.value})
	}

	render(){
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		});
		return (
			<div>
				<h1>Robo Friends</h1>
				<SearchBox onSearch={this.onSearchChange}/>
				<Cardlist robots={filteredRobots}/>
			</div>


		);

	}
}

export default App;