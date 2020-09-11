import React, { useState } from "react";
import {
	MenuItem,
	FormControl,
	InputLabel,
	Select,
	makeStyles,
	Box,
} from "@material-ui/core";
import AddToCartButton from "./AddToCartButton";

const ProductOptions = ({ product, sizeData }) => {
	const [selectedSize, setSelectedSize] = useState("");

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
			minWidth: 120,
		},
	}));

	const classes = useStyles();

	if (!sizeData) {
		return null;
	} else {
		return (
			<>
				<Box height="80%" pt={2}>
					<Box height="50%">
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

					<Box height="50%">
						<AddToCartButton
							product={product}
							selectedSize={selectedSize}
							availableQty={selectedSize.qty}
						/>
					</Box>
				</Box>
			</>
		);
	}
};

export default ProductOptions;
