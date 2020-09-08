import React, { useContext, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { ProductContext } from "../contexts/ProductContext";
import { Grid, Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

const Collection = (props) => {
	const { filterCollectionProducts } = useContext(ProductContext);
	const collectionId = props.match.params.id;
	const [collectionProducts, setCollectionProducts] = useState([]);

	useEffect(() => {
		filterCollectionProducts(collectionId, setCollectionProducts);
	}, [collectionId, filterCollectionProducts]);

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
