import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../contexts/ProductContext";
import firebase from "../config/firebase";
import { Grid, Typography, Button, Box, makeStyles } from "@material-ui/core";
import ProductDescription from "./ProductDescription";
import ProductTabs from "./ProductTabs";

const Product = (props) => {
	const { products } = useContext(ProductContext);
	const [product, setProduct] = useState({});

	const id = props.match.params.id;

	useEffect(() => {
		//fetch a single product
		const fetchProduct = async () => {
			const product = products.find((product) => product.id === id);
			return product;
		};

		// fetch the size variants for the product
		const getSizeVariants = async () => {
			const fetchSizes = async () => {
				const sizeData = [];
				const db = firebase.firestore();
				db.collection("products")
					.doc(id)
					.collection("sizes")
					.onSnapshot((snapshot) => {
						// const sizeData = [];
						snapshot.forEach((size) => sizeData.push({ ...size.data() }));
					});
				return sizeData;
			};

			const sizes = await fetchSizes();
			return sizes;
		};

		//update the state
		const updateProduct = async () => {
			const productDetails = await fetchProduct();
			const sizeVariants = await getSizeVariants();

			const productObj = {
				...productDetails,
				sizeVariants: sizeVariants,
			};
			setProduct(productObj);
			return { productObj };
		};

		updateProduct();
	}, [id, products]);

	const useStyles = makeStyles((theme) => ({
		formControl: {
			margin: theme.spacing(1),
			minWidth: 120,
		},
		selectEmpty: {
			marginTop: theme.spacing(2),
		},
	}));

	const classes = useStyles();

	if (product) {
		return (
			<>
				<Grid container>
					<Grid item xs={false} sm={1} />

					<Grid container item direction="column" sm={10} spacing={5}>
						<Grid container item direction="row">
							<Grid item sm={6}>
								<Box>
									<img
										src="https://via.placeholder.com/800"
										height="440"
										alt=""
									/>
								</Box>
							</Grid>
							<Grid container item direction="column" sm={6} spacing={4}>
								<Grid item>
									<Typography variant="h4" component="h1">
										{product.title}
									</Typography>
								</Grid>
								<Grid item>
									<Typography variant="h5">{product.price}</Typography>
								</Grid>
								<Grid item>{/* SELECT SIZE */}</Grid>
								<Grid item>
									<Button variant="contained">Add to cart</Button>
								</Grid>
							</Grid>
						</Grid>

						<Grid container item direction="row">
							<Grid item xs={12} sm={6}>
								<ProductDescription />
							</Grid>
							<Grid item xs={12} sm={6}>
								<ProductTabs />
							</Grid>
						</Grid>
					</Grid>

					<Grid item xs={false} sm={1} />
				</Grid>
			</>
		);
	} else {
		return "loading";
	}
};

export default Product;
