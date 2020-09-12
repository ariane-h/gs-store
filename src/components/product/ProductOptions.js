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
import BackInStockButton from "./BackInStockButton";

const ProductOptions = ({ product, sizeData }) => {
	const [selectedSize, setSelectedSize] = useState("");

	const [showAddToCart, setShowAddToCart] = useState(true);

	const handleChange = (event) => {
		if (event.target.value === "OOS") {
			setShowAddToCart(false);
			setSelectedSize(event.target.value);
		} else {
			setShowAddToCart(true);
			setSelectedSize(event.target.value);
		}
	};

	const actionButtons = () => {
		if (showAddToCart) {
			return (
				<AddToCartButton
					product={product}
					selectedSize={selectedSize}
					availableQty={selectedSize.qty}
				/>
			);
		} else {
			return (
				<BackInStockButton product={product} selectedSize={selectedSize} />
			);
		}
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
				<MenuItem key={i} value={"OOS"}>
					{`${sizeOption.title} - Out of stock`}
				</MenuItem>
			);
		}
	};

	const useStyles = makeStyles((theme) => ({
		formControl: {
			minWidth: 120,
			width: "200px",
		},
	}));

	const classes = useStyles();

	if (!sizeData) {
		return null;
	} else {
		return (
			<>
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

				<Box>{actionButtons}</Box>
			</>
		);
	}
};

export default ProductOptions;
