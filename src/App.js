import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Collection from "./components/Collection";
import Product from "./components/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Grid } from "@material-ui/core";
import ProductContextProvider from "./contexts/ProductContext";

function App() {
	return (
		<BrowserRouter>
			<div className="app">
				<Grid container direction="column" alignItems="center" justify="center">
					<Grid item>
						<Header />
					</Grid>
					<ProductContextProvider>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/collections" component={Collection} />
							<Route path="/product" component={Product} />
						</Switch>
					</ProductContextProvider>
				</Grid>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
