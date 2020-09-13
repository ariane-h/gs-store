import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

const CollectionProductList = ({ collectionProducts }) => {
	const useStyles = makeStyles((theme) => ({
		container: {
			justifyContent: "center",
		},
	}));

	const classes = useStyles();

	return (
		<Grid container direction="row" item sm={10}>
			{collectionProducts &&
				collectionProducts.map((product) => {
					return (
						<Grid
							container
							item
							xs={12}
							sm={12}
							md={6}
							lg={4}
							key={product.id}
							className={classes.container}
						>
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
