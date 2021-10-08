import React, { Component } from "react";
import Logo from "../Logo";
import { Cover } from "./Cover";

export default class Company extends Component {
	state = {
		companies: [],
	};
	async getMovies() {
		const data = await fetch(
			`https://elorri.fr/api/disney-plus/company/${this.props.match.params.name}`
		).then((response) => {
			return response.json();
		});
		this.setState({
			companies: data,
		});
	}
	componentDidMount() {
		this.getMovies();
	}
	render() {
		const posterList = this.state.companies.map((element) => {
			return <Cover source={element.poster} />;
		});
		return (
			<div>
				<Logo />
				<div className="company-container">{posterList}</div>
			</div>
		);
	}
}
