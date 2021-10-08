import React, { Component } from "react";
import Logo from "../Logo";
import { Cover } from "./Cover";
import Detail from "./Detail";

export default class Movie extends Component {
	state = {
		movie: {},
	};
	async getMovie() {
		const data = await fetch(
			`https://elorri.fr/api/disney-plus/movie/${this.props.match.params.id}`
		).then((response) => {
			return response.json();
		});

		this.setState({
			movie: data,
		});
	}
	componentDidMount() {
		this.getMovie();
	}
	render() {
		if (this.state.movie.length === 0) {
			return <p>Still loading</p>;
		}

		// const movie = this.state.movie.map((element) => {
		// 	return <div></div> <Cover source={element.poster} key={element.id} />;
		// });
		return (
			<div>
				<Logo />
				<div className="group">
					<Cover source={this.state.movie.poster} />
					<Detail
						text={this.state.movie.description}
						title={this.state.movie.title}
						company={this.state.movie.company}
						videosource={this.state.movie.video}
					/>
				</div>
			</div>
		);
	}
}
