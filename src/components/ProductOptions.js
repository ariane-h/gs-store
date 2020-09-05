import React from "react";
import {
	MenuItem,
	FormControl,
	InputLabel,
	Select,
	makeStyles,
	Typography,
} from "@material-ui/core";

const ProductOptions = ({ sizeData }) => {
	const [selectedSize, setSelectedSize] = React.useState("");

	const handleChange = (event) => {
		setSelectedSize(event.target.value);
	};

	const sizeMenuItem = (sizeOption, i) => {
		if (sizeOption.qty > 0) {
			return (
				<MenuItem key={i} value={sizeOption.title}>
					{sizeOption.title}
				</MenuItem>
			);
		} else {
			return (
				<MenuItem disabled={true} key={i} value={sizeOption.title}>
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

	if (sizeData) {
		return (
			<div>
				<FormControl variant="outlined" className={classes.formControl}>
					<InputLabel id="sizeVariants">Size</InputLabel>
					<Select
						labelId="demo-simple-select-outlined-label"
						id="demo-simple-select-outlined"
						value={selectedSize}
						onChange={handleChange}
						label="Size"
					>
						{sizeData.map((sizeOption, i) => sizeMenuItem(sizeOption, i))}
					</Select>
				</FormControl>
			</div>
		);
	} else {
		return <Typography variant="h2">Out of Stock</Typography>;
	}
};

export default ProductOptions;
