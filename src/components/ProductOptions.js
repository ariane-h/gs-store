import React from "react";
import {
	MenuItem,
	FormControl,
	InputLabel,
	Select,
	makeStyles,
	Grid,
	Box,
} from "@material-ui/core";
import AddToCartButton from "./AddToCartButton";

const ProductOptions = ({ product, sizeData }) => {
	const [selectedSize, setSelectedSize] = React.useState("");

	const handleChange = (event) => {
		setSelectedSize(event.target.value);
	};

	const sizeMenuItem = (sizeOption, i) => {
		if (sizeOption.qty > 0) {
			return (
				<MenuItem key={i} value={sizeOption}>
					{sizeOption.title}
				</MenuItem>
			);
		} else {
			return (
				<MenuItem disabled={true} key={i} value={sizeOption}>
					{sizeOption.title}
				</MenuItem>
			);
		}
	};

	const useStyles = makeStyles((theme) => ({
		formControl: {
			margin: theme.spacing(1),
			minWidth: 120,
		},
	}));

	const classes = useStyles();

	if (!sizeData) {
		return null;
	} else {
		return (
			<div>
				<Grid item>
					<Box>
						<FormControl variant="outlined" className={classes.formControl}>
							<InputLabel id="select-size">Size</InputLabel>
							<Select
								labelId="select-size"
								id="select-size"
								value={selectedSize}
								onChange={handleChange}
								label="Size"
							>
								{sizeData.map((sizeOption, i) => sizeMenuItem(sizeOption, i))}
							</Select>
						</FormControl>
					</Box>
				</Grid>
				<Grid item>
					<AddToCartButton
						product={product}
						selectedSize={selectedSize}
						availableQty={selectedSize.qty}
					/>
				</Grid>
			</div>
		);
	}
};

export default ProductOptions;
