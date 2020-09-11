import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../../contexts/ProductContext";
import { Grid, Typography, Box, makeStyles } from "@material-ui/core";
import ProductDescription from "./ProductDescription";
import ProductTabs from "./ProductTabs";
import ProductOptions from "./ProductOptions";
import ProductImg from "./ProductImg";
import { fetchProduct } from "../../helpers/products/productHelpers";
import ProductSocialShareButtons from "./ProductSocialShareButtons";

const Product = (props) => {
	const { products } = useContext(ProductContext);
	const productId = props.match.params.id;
	const [product, setProduct] = useState({
		title: "",
		price: "",
		imageUrl: "",
		id: "",
		description: "",
		sizes: [],
	});

	useEffect(() => {
		window.scrollTo(0, 0);
		const updateProduct = async () => {
			const currentProduct = await fetchProduct(products, productId);
			setProduct({ ...currentProduct });
			return { currentProduct };
		};

		updateProduct();
	}, [productId, products]);

	const useStyles = makeStyles((theme) => ({
		infoContainer: {
			height: "80%",
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-evenly",
			paddingTop: "70px",
			paddingLeft: "50px",
		},
		options: {
			height: "300px",
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-evenly",
		},
	}));

	const classes = useStyles();

	if (!product) {
		return null;
	} else {
		return (
			<>
				<Grid container>
					<Grid item xs={false} sm={1} />

					<Grid container item direction="column" sm={10} spacing={2}>
						<Grid container item direction="row">
							<Grid item xs={12} sm={6}>
								<ProductImg imageUrl={product.imageUrl} />
							</Grid>
							<Grid item xs={12} sm={6}>
								<Box className={classes.infoContainer}>
									<Box>
										<Typography variant="h4" component="h1" gutterBottom>
											{product.title}
										</Typography>

										<Typography variant="h5" gutterBottom>
											{product.price && `£ ${product.price.toFixed(2)}`}
										</Typography>
									</Box>

									<Box className={classes.options}>
										<ProductOptions
											product={product}
											sizeData={product.sizes}
										/>
									</Box>
									<Box>
										<ProductSocialShareButtons title={product.title} />
									</Box>
								</Box>
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
	}
};

export default Product;
