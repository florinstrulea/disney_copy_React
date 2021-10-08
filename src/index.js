import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import NotFound from "./components/NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Company from "./components/Company";
import Movie from "./components/Movie";

const Root = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/movie/:id" component={Movie} />
				{/* :id est la syntaxe dans react Router qui permet d'avoir des valeurs variables dans l'url qui seront stockés dans un parametre portant le nom qui se trouve après le ":" */}
				<Route path="/company/:name" component={Company} />
				<Route component={NotFound} />
				{/* <Route component={NotFound} /> */}
			</Switch>
		</BrowserRouter>
	);
};
ReactDOM.render(
	<React.StrictMode>
		<Root />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
