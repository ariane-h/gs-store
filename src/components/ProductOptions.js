import React, { useEffect } from "react";
import {
	MenuItem,
	FormControl,
	InputLabel,
	Select,
	makeStyles,
	responsiveFontSizes,
} from "@material-ui/core";

const ProductOptions = ({ sizeVariants }) => {
	const [selectedSize, setSelectedSize] = React.useState("");
	const [sizes, setSizes] = React.useState([]);

	useEffect(() => {
		sizeVariants.length > 0 && setSizes(sizeVariants);
	}, [sizeVariants]);

	// const useStyles = makeStyles((theme) => ({
	// 	formControl: {
	// 		margin: theme.spacing(1),
	// 		minWidth: 120,
	// 	},
	// 	selectEmpty: {
	// 		marginTop: theme.spacing(2),
	// 	},
	// }));

	const handleChange = (event) => {
		setSelectedSize(event.target.value);
	};

	// const sizeMenuItem = (sizeOption, index) => {
	// 	if (sizeOption.qty > 0) {
	// 		return (
	// 			<MenuItem key={index} value={sizeOption.title}>
	// 				<em>{sizeOption.title}</em>
	// 			</MenuItem>
	// 		);
	// 	} else {
	// 		return (
	// 			<MenuItem disabled={true} key={index} value={sizeOption.title}>
	// 				<em>{sizeOption.title}</em>
	// 			</MenuItem>
	// 		);
	// 	}
	// };

	// const classes = useStyles();

	if (sizes.length > 0) {
		return (
			<div>
				<FormControl variant="outlined">
					<InputLabel id="sizeVariants">Size</InputLabel>
					<Select
						labelId="demo-simple-select-outlined-label"
						id="demo-simple-select-outlined"
						value={selectedSize}
						onChange={(e) => handleChange(e)}
						label="Size"
					>
						{sizes.map((sizeOption, i) => (
							<MenuItem key={i} value={sizeOption.title}>
								{sizeOption.title}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</div>
		);
	} else {
		return "loading";
	}
};

export default ProductOptions;
