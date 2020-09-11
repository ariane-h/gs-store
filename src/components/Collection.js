import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { CollectionContext } from "../contexts/CollectionContext";
import {
	Grid,
	Typography,
	Box,
	MenuItem,
	FormControl,
	InputLabel,
	Select,
	makeStyles,
} from "@material-ui/core";
import {
	fetchCollectionProducts,
	fetchCollectionDetails,
	sortAlphaAscending,
	sortAlphaDescending,
	sortPriceAscending,
	sortPriceDescending,
} from "../helpers/collections/collectionHelpers";
import CollectionProductList from "./CollectionProductList";

const Collection = (props) => {
	const { products } = useContext(ProductContext);
	const { collections } = useContext(CollectionContext);
	const collectionId = props.match.params.id;
	const [collectionProducts, setCollectionProducts] = useState([]);
	const [collectionDetails, setCollectionDetails] = useState({
		title: "",
		description: "",
	});
	const [sortValue, setSortValue] = useState("");

	useEffect(() => {
		window.scrollTo(0, 0);

		const loadCollectionProducts = async () => {
			try {
				await fetchCollectionProducts(collectionId, products).then((products) =>
					setCollectionProducts(products)
				);
			} catch (err) {
				console.log("error loading collection products", err);
			}
		};

		loadCollectionProducts();

		const updateCollectionDetails = async () => {
			const currentCollection = await fetchCollectionDetails(
				collections,
				collectionId
			);
			setCollectionDetails({ ...currentCollection });
			return { currentCollection };
		};

		updateCollectionDetails();
	}, [collectionId, products, collections]);

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

	const handleChange = (e) => {
		const sortParam = e.target.value;
		setSortValue(sortParam);
		switch (sortParam) {
			case "A-Z":
				setCollectionProducts(sortAlphaAscending(collectionProducts));
				break;
			case "Z-A":
				setCollectionProducts(sortAlphaDescending(collectionProducts));
				break;
			case "0-9":
				setCollectionProducts(sortPriceAscending(collectionProducts));
				break;
			case "9-0":
				setCollectionProducts(sortPriceDescending(collectionProducts));
				break;
			default:
				return collectionProducts;
		}
	};

	return (
		<>
			<Grid container direction="column" alignItems="center">
				<Box mt={3}>
					<Typography variant="h5" component="h1">
						{collectionDetails && collectionDetails.title}
					</Typography>
				</Box>
				<Box mb={1}>
					<Typography variant="subtitle1" component="h2">
						{collectionDetails && collectionDetails.description}
					</Typography>
				</Box>

				<Box mb={2}>
					<FormControl variant="outlined" className={classes.formControl}>
						<InputLabel id="sort">Sort</InputLabel>
						<Select
							labelId="sort"
							id="sort"
							value={sortValue}
							onChange={handleChange}
							label="Sort"
						>
							<MenuItem value={"A-Z"}>A-Z</MenuItem>
							<MenuItem value={"Z-A"}>Z-A</MenuItem>
							<MenuItem value={"0-9"}>Price - low to high</MenuItem>
							<MenuItem value={"9-0"}>Price - high to low</MenuItem>
						</Select>
					</FormControl>
				</Box>

				<CollectionProductList collectionProducts={collectionProducts} />
			</Grid>
		</>
	);
};

export default Collection;
