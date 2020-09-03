import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Collection from "./components/Collection";
import Product from "./components/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Grid } from "@material-ui/core";

function App() {
	return (
		<BrowserRouter>
			<div className="app">
				<Grid container direction="column">
					<Grid item>
						<Header />
					</Grid>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/collections" component={Collection} />
						<Route path="/product" component={Product} />
					</Switch>
					<Footer />
				</Grid>
			</div>
		</BrowserRouter>
	);
}

export default App;
