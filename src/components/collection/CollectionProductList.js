import React from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const CollectionProductList = ({ collectionProducts }) => {
	return (
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
	);
};

export default CollectionProductList;
