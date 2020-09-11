import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Collection from "./components/collection/Collection";
import Product from "./components/product/Product";
import Header from "./components/navigation/Header";
import Footer from "./components/navigation/Footer";
import { Grid } from "@material-ui/core";
import ProductContextProvider from "./contexts/ProductContext";
import CartContextProvider from "./contexts/CartContext";
import CollectionContextProvider from "./contexts/CollectionContext";
import Contact from "./components/contact/Contact";

import Cart from "./components/cart/Cart";
import SearchResults from "./components/search/SearchResults";

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
							<CollectionContextProvider>
								<CartContextProvider>
									<Switch>
										<Route exact path="/" component={Home} />

										<Route path="/collections/:id" component={Collection} />

										<Route path="/products/:id" component={Product} />
										<Route path="/cart" component={Cart} />
										<Route path="/contact" component={Contact} />
										<Route path="/search" component={SearchResults} />
									</Switch>
								</CartContextProvider>
							</CollectionContextProvider>
						</ProductContextProvider>
					</Grid>
				</Grid>

				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;
