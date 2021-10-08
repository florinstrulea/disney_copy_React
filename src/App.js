import React, { Component } from "react";
import Logo from "./Logo";
import "./App.scss";
import { Cover } from "../src/components/Cover";
import companies from "./companies.js";
import Studio from "./components/Studio";
class App extends Component {
	state = { movies: [], companies, suggestions: [] };
	async getMovies() {
		const data = await fetch("https://elorri.fr/api/disney-plus/movies").then((response) => {
			return response.json();
		});
		this.setState({
			movies: data,
		});
	}
	async getSuggest() {
		const data = await fetch("https://elorri.fr/api/disney-plus/suggest").then((response) => {
			return response.json();
		});
		this.setState({
			suggestions: data,
		});
	}
	componentDidMount() {
		this.getMovies();
		this.getSuggest();
	}
	getSource() {
		const movieObjects = this.state.movies.find(
			(element) => element.highlighted && element.id === 330459
		);
		return movieObjects.cover;
	}

	render() {
		const posterList = this.state.movies.slice(0, 6).map((element) => {
			return <Cover classname="" source={element.poster} id={element.id} key={element.id} />;
		});

		const coverList = this.state.suggestions.slice(0, 3).map((element) => {
			return <Cover source={element.cover} id={element.id} key={element.id} />;
		});
		const studioList = Object.keys(this.state.companies).map((element) => {
			return (
				<Studio
					source={`${process.env.PUBLIC_URL}/img/companies/logo-${element}.png`}
					name={element}
				/>
			);
		});

		if (this.state.movies.length === 0) {
			return <p>Chargement en cours</p>;
		}
		return (
			<div className="App">
				<Logo />
				<div className="hero">
					<Cover className="poster-container" source={this.getSource()} />
				</div>

				<div className="studio-container">{studioList}</div>

				<div>Latest films</div>
				<div className="poster-container">{posterList}</div>

				<div>Recommandations</div>
				<div className="cover-container">{coverList}</div>
			</div>
		);
	}
}

export default App;
