import React, { useState, useEffect } from "react";
import { Box, makeStyles, Typography, Grid } from "@material-ui/core";
import { fetchImage } from "../helpers/images/imageHelpers";
import firebase from "../config/firebase";
import { Link } from "react-router-dom";

const Home = () => {
	const [heroImgUrl, setHeroImgUrl] = useState("");

	const heroSrc = "gs://shoe-shop-f5df2.appspot.com/nike-air-max.jpg";

	useEffect(() => {
		fetchImage(firebase, heroSrc).then((url) => {
			setHeroImgUrl(url);
		});
	}, []);

	const useStyles = makeStyles((theme) => ({
		hero: {
			backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${heroImgUrl})`,
			height: "500px",
			backgroundPosition: "center",
			backgroundRepeat: "no-repeat",
			backgroundSize: "cover",

			display: "flex",
			flexDirection: "column",
			justifyContent: "center",
			alignItems: "center",
			color: "#fff",
			[theme.breakpoints.down("sm")]: {
				height: 300,
				fontSize: "3em",
			},
		},

		container: {
			flexGrow: 1,
			textAlign: "center",
		},

		promo: {
			padding: "20px",
		},
	}));

	const classes = useStyles();

	return (
		<>
			<Box className={classes.hero}>
				<Typography variant="h2">Your Favourite Pair</Typography>
				<Typography variant="h5">Shop Trainers</Typography>
			</Box>

			<Box className={classes.container}>
				<Grid container>
					<Grid item xs={12} sm={4}>
						<Link to="/collections/mens" style={{ textDecoration: "none" }}>
							<img
								className={classes.promo}
								src="img/airjordan-red.jpg"
								height="300"
								alt=""
							/>
							<Typography variant="h5">Mens</Typography>
						</Link>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Link to="/collections/womens" style={{ textDecoration: "none" }}>
							<img
								className={classes.promo}
								src="img/mint-flats.jpg"
								height="300"
								alt=""
							/>
							<Typography variant="h5">Womens</Typography>
						</Link>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Link
							to="/collections/womens-trainers"
							style={{ textDecoration: "none" }}
						>
							<img
								className={classes.promo}
								src="img/converse.jpg"
								height="300"
								alt=""
							/>
							<Typography variant="h5">Womens Trainers</Typography>
						</Link>
					</Grid>
				</Grid>
			</Box>
		</>
	);
};

export default Home;
