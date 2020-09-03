import React, { useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductContext } from "../contexts/ProductContext";
import { Grid, Typography, Box } from "@material-ui/core";

const Collection = () => {
	const { products } = useContext(ProductContext);

	const productCard = (product) => {
		return (
			<Grid container item xs={12} sm={4} key={product.id}>
				<ProductCard {...product} />
			</Grid>
		);
	};

	return (
		<>
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

			<Grid container direction="row">
				<Grid item sm={3}>
					<h1>sidebar</h1>
				</Grid>

				<Grid container item spacing={3} sm={9}>
					{products.map((product) => productCard(product))}
				</Grid>
			</Grid>
		</>
	);
};

export default Collection;
