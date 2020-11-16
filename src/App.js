import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Collection from './components/collection/Collection';
import Product from './components/product/Product';
import Header from './components/navigation/Header';
import Footer from './components/navigation/Footer';
import { Grid } from '@material-ui/core';
import ProductContextProvider from './contexts/ProductContext';
import CartContextProvider from './contexts/CartContext';
import CollectionContextProvider from './contexts/CollectionContext';
import Contact from './components/contact/Contact';

import Cart from './components/cart/Cart';
import SearchResults from './components/search/SearchResults';
import Delivery from './components/delivery/Delivery';
import Login from './components/auth/Login';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './auth/PrivateRoute';
import NotFound from './components/navigation/NotFound';

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<div className="app">
					<Grid container direction="column">
						<Grid item xs>
							<Header />
						</Grid>

						<Grid container item direction="column">
							<ProductContextProvider>
								<CollectionContextProvider>
									<CartContextProvider>
										<Switch>
											<Route exact path="/login" component={Login} />
											<PrivateRoute exact path="/" component={Home} />

											<PrivateRoute
												path="/collections/:id"
												component={Collection}
											/>

											<PrivateRoute path="/products/:id" component={Product} />
											<PrivateRoute path="/cart" component={Cart} />
											<PrivateRoute path="/contact" component={Contact} />
											<PrivateRoute path="/search" component={SearchResults} />
											<PrivateRoute path="/delivery" component={Delivery} />
											<Route path="*" exact={true} component={NotFound} />
										</Switch>
									</CartContextProvider>
								</CollectionContextProvider>
							</ProductContextProvider>
						</Grid>
					</Grid>

					<Footer />
				</div>
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
