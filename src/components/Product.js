import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { Grid, Typography, Box } from "@material-ui/core";
import ProductDescription from "./ProductDescription";
import ProductTabs from "./ProductTabs";
import ProductOptions from "./ProductOptions";
import ProductImg from "./ProductImg";

const Product = (props) => {
	const { products } = useContext(ProductContext);
	const id = props.match.params.id;
	const [product, setProduct] = useState({
		title: "",
		price: "",
		imageUrl: "",
		id: "",
		description: "",
		sizes: [],
	});

	useEffect(() => {
		//fetch a product
		const fetchProduct = async () => {
			const product = products.find((product) => product.id === id);
			return product;
		};

		//update the state
		const updateProduct = async () => {
			const currentProduct = await fetchProduct();
			setProduct({ ...currentProduct });
			return { currentProduct };
		};

		updateProduct();
	}, [id, products]);

	if (!product) {
		return null;
	} else {
		return (
			<>
				<Grid container>
					<Grid item xs={false} sm={1} />

					<Grid container item direction="column" sm={10} spacing={5}>
						<Grid container item direction="row">
							<Grid item sm={6}>
								<Box>
									<ProductImg imageUrl={product.imageUrl} />
								</Box>
							</Grid>
							<Grid container item direction="column" sm={6} spacing={4}>
								<Grid item>
									<Typography variant="h4" component="h1">
										{product.title}
									</Typography>
								</Grid>
								<Grid item>
									<Typography variant="h5">{`£ ${product.price}`}</Typography>
								</Grid>

								<ProductOptions product={product} sizeData={product.sizes} />
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
