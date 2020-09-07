import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Collection from "./components/Collection";
import Product from "./components/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Grid } from "@material-ui/core";
import ProductContextProvider from "./contexts/ProductContext";
import CartContextProvider from "./contexts/CartContext";

function App() {
	return (
		<BrowserRouter>
			<div className="app">
				<Grid container direction="column" alignItems="center" justify="center">
					<Grid item>
						<Header />
					</Grid>
					<ProductContextProvider>
						<CartContextProvider>
							<Switch>
								<Route exact path="/" component={Home} />
								<Route path="/collections/:id" component={Collection} />
								<Route path="/products/:id" component={Product} />
							</Switch>
						</CartContextProvider>
					</ProductContextProvider>
				</Grid>

				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
