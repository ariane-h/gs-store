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
import Cart from "./components/Cart";

function App() {
	return (
		<BrowserRouter>
			<div className="app">
				<Grid container direction="column">
					<Grid item>
						<Header />
					</Grid>

					<Grid container item direction="column">
						<ProductContextProvider>
							<CartContextProvider>
								<Switch>
									<Route exact path="/" component={Home} />
									<Route path="/collections/:id" component={Collection} />
									<Route path="/products/:id" component={Product} />
									<Route path="/cart" component={Cart} />
								</Switch>
							</CartContextProvider>
						</ProductContextProvider>
					</Grid>
				</Grid>

				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
