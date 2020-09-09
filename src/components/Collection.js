import React, { useContext, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { ProductContext } from "../contexts/ProductContext";
import { Grid, Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
	filterCollectionProducts,
	searchProductsByTitle,
} from "../helpers/collections/collectionHelpers";

const Collection = (props) => {
	const { products } = useContext(ProductContext);
	const collectionId = props.match.params.id;
	const [collectionProducts, setCollectionProducts] = useState([]);
	const searchParam = window.location.search;
	const searchTerm = searchParam.slice(3, searchParam.length);

	// testing collection filter
	collectionProducts.length > 0 &&
		searchTerm &&
		console.log(searchProductsByTitle(searchTerm, collectionProducts));

	useEffect(() => {
		filterCollectionProducts(collectionId, setCollectionProducts, products);
	}, [collectionId, products]);

	return (
		<>
			<Grid container direction="column" alignItems="center">
				<Box mt={3}>
					<Typography variant="h5" component="h1">
						Collection Title
					</Typography>
				</Box>
				<Box mb={5}>
					<Typography variant="subtitle1" component="h2">
						Collection Description
					</Typography>
				</Box>

				<Grid container direction="row" item sm={10} spacing={3}>
					{collectionProducts &&
						collectionProducts.map((product) => {
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
};

export default Collection;
