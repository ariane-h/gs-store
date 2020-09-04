import React, { useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import {
	Grid,
	Typography,
	Button,
	makeStyles,
	FormControl,
	InputLabel,
	Select,
	Box,
} from "@material-ui/core";

const Product = (props) => {
	const { products } = useContext(ProductContext);
	const id = props.match.params.id;

	const product = products.find((product) => product.id === id);
	console.log(product);

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
	const [productOptions, setProductOptions] = useState({
		size: "",
	});

	const handleChange = (event) => {
		setProductOptions({
			...productOptions,
			[event.target.id]: event.target.value,
		});
	};

	return (
		<>
			<Grid container>
				<Grid item xs={false} sm={1} />

				<Grid container item direction="column" sm={10} spacing={5}>
					{/* top row  */}

					<Grid container item direction="row">
						<Grid item sm={6}>
							<img src="https://via.placeholder.com/800" height="440" alt="" />
						</Grid>
						<Grid container item direction="column" sm={6} spacing={4}>
							<Grid item>
								<Typography variant="h4" component="h1">
									product title
								</Typography>
							</Grid>
							<Grid item>
								<Typography variant="h5">product price</Typography>
							</Grid>
							<Grid item>
								<FormControl variant="outlined" className={classes.formControl}>
									<InputLabel htmlFor="outlined-age-native-simple">
										Size
									</InputLabel>
									<Select
										native
										value={productOptions.size}
										onChange={handleChange}
										label="Size"
										id="size"
									>
										<option aria-label="None" value="" />
										<option value={"3"}>UK 3</option>
										<option value={"5"}>UK 5</option>
										<option value={"8"}>UK 8</option>
									</Select>
								</FormControl>
							</Grid>
							<Grid item>
								<Button variant="contained">Add to cart</Button>
							</Grid>
						</Grid>
					</Grid>

					{/* bottom row */}
					<Grid container item direction="row">
						<Grid item xs={12} sm={6}>
							<Box p={3}>
								<Typography variant="h5" component="h3">
									Description
								</Typography>
								<Typography variant="body1" component="h2">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Repellendus blanditiis quas sunt doloremque dignissimos
									repellat nisi, praesentium distinctio quia quidem corrupti
									consectetur ex tempora tempore aperiam laboriosam mollitia
									ducimus nesciunt!
								</Typography>
							</Box>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Box p={3}>
								<Typography variant="h5">Delivery and Returns</Typography>
								<Typography variant="body1" component="h2">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Repellendus blanditiis quas sunt doloremque dignissimos
									repellat nisi, praesentium distinctio quia quidem corrupti
									consectetur ex tempora tempore aperiam laboriosam mollitia
									ducimus nesciunt!
								</Typography>
							</Box>
						</Grid>
					</Grid>
				</Grid>

				<Grid item xs={false} sm={1} />
			</Grid>
		</>
	);
};

export default Product;
