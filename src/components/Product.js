import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../contexts/ProductContext";
import firebase from "../config/firebase";
import {
	Grid,
	Typography,
	Button,
	Box,
	makeStyles,
	MenuItem,
	InputLabel,
	Select,
	FormControl,
} from "@material-ui/core";
import ProductDescription from "./ProductDescription";
import ProductTabs from "./ProductTabs";
import ProductOptions from "./ProductOptions";

const Product = (props) => {
	const { products } = useContext(ProductContext);
	const [product, setProduct] = useState({});
	const [sizeVariants, setSizeVariants] = useState([]);

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
						snapshot.forEach((size) => sizeData.push({ ...size.data() }));
					});
				return sizeData;
			};

			const sizes = await fetchSizes();
			return sizes;
		};

		//update the state
		const updateProduct = async () => {
			const currentProduct = await fetchProduct();
			const sizeVariantsValues = await getSizeVariants();

			// const productObj = {
			// 	...currentProduct,
			// 	sizeVariants: sizeVariants,
			// };

			setProduct(currentProduct);
			setSizeVariants(sizeVariantsValues);
			return { currentProduct, sizeVariantsValues };
		};

		updateProduct();
	}, [id, products]);

	if (product && sizeVariants) {
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
								<Grid item>
									<Box>
										<ProductOptions sizeVariants={sizeVariants} />
									</Box>
								</Grid>
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
