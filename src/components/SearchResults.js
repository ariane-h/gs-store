import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { searchProductsByTitle } from "../helpers/collections/collectionHelpers";
import { Grid, Box, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const SearchResults = () => {
	const { products } = useContext(ProductContext);
	const [searchResults, setSearchResults] = useState([]);

	const searchParam = window.location.search;
	const query = searchParam.slice(3, searchParam.length);

	useEffect(() => {
		const loadSearchResults = async () => {
			try {
				let results = await searchProductsByTitle(query, products);
				setSearchResults(results);
			} catch (err) {
				console.log("error loading search results", err);
			}
		};

		loadSearchResults();
	}, [query, products]);

	if (searchResults.length === 0) {
		return (
			<Grid container direction="column" alignItems="center">
				<Box mt={3}>
					<Typography variant="h5" component="h1">
						Sorry, no results found for {`"${query}"`}
					</Typography>
				</Box>
			</Grid>
		);
	} else {
		return (
			<>
				<Grid container direction="column" alignItems="center">
					<Box mt={3}>
						<Typography variant="h5" component="h1">
							Search results for {`"${query}"`}
						</Typography>
					</Box>

					<Grid container direction="row" item sm={10} spacing={3}>
						{searchResults &&
							searchResults.map((product) => {
								return (
									<Grid container item xs={12} sm={4} key={product.id}>
										<Link
											to={`/products/${product.id}`}
											style={{ textDecoration: "none" }}
										>
											<ProductCard
												product={product}
												key={product.id}
												imageUrl={product.imageUrl}
											/>
										</Link>
									</Grid>
								);
							})}
					</Grid>
				</Grid>
			</>
		);
	}
};

export default SearchResults;
