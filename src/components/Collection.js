import React, { useContext, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { ProductContext } from "../contexts/ProductContext";
import { CollectionContext } from "../contexts/CollectionContext";
import { Grid, Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
	fetchCollectionProducts,
	searchProductsByTitle,
	fetchCollectionDetails,
} from "../helpers/collections/collectionHelpers";

const Collection = (props) => {
	const { products } = useContext(ProductContext);
	const { collections } = useContext(CollectionContext);
	const collectionId = props.match.params.id;
	const [collectionProducts, setCollectionProducts] = useState([]);

	const [collectionDetails, setCollectionDetails] = useState({
		title: "",
		description: "",
	});

	const searchParam = window.location.search;
	const searchTerm = searchParam.slice(3, searchParam.length);

	// testing collection filter
	collectionProducts.length > 0 &&
		searchTerm &&
		console.log(searchProductsByTitle(searchTerm, collectionProducts));

	useEffect(() => {
		window.scrollTo(0, 0);

		const loadCollectionProducts = async () => {
			try {
				await fetchCollectionProducts(collectionId, products).then((products) =>
					setCollectionProducts(products)
				);
			} catch (err) {
				console.log("error loading collection products", err);
			}
		};

		loadCollectionProducts();

		const updateCollectionDetails = async () => {
			const currentCollection = await fetchCollectionDetails(
				collections,
				collectionId
			);
			setCollectionDetails({ ...currentCollection });
			return { currentCollection };
		};

		updateCollectionDetails();
	}, [collectionId, products, collections]);

	return (
		<>
			<Grid container direction="column" alignItems="center">
				<Box mt={3}>
					<Typography variant="h5" component="h1">
						{collectionDetails && collectionDetails.title}
					</Typography>
				</Box>
				<Box mb={5}>
					<Typography variant="subtitle1" component="h2">
						{collectionDetails && collectionDetails.description}
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
