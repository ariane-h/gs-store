import React, { useState, useEffect, useContext } from 'react';
import { Box, makeStyles, Typography, Grid } from '@material-ui/core';
import { fetchImage } from '../../helpers/images/imageHelpers';
import firebase from '../../config/firebase';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Home = () => {
	const [heroImgUrl, setHeroImgUrl] = useState('');
	const { currentUser } = useContext(AuthContext);

	const heroSrc = 'gs://shoe-shop-f5df2.appspot.com/nike-air-max.jpg';

	useEffect(() => {
		let mounted = true;

		fetchImage(firebase, heroSrc).then((url) => {
			if (mounted) {
				setHeroImgUrl(url);
			}
		});

		return () => (mounted = false);
	}, [heroSrc, heroImgUrl]);

	const useStyles = makeStyles((theme) => ({
		hero: {
			backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${heroImgUrl})`,
			height: '500px',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',

			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			color: '#fff',
			[theme.breakpoints.down('sm')]: {
				height: 300,
				fontSize: '3em',
			},
		},

		container: {
			textAlign: 'center',
		},

		promo: {
			padding: '20px',
		},
		heroLink: {
			textDecoration: 'none',
			color: 'white',
		},
		promoLink: {
			textDecoration: 'none',
			color: 'rgba(0, 0, 0, 0.87)',
		},
		promoImage: {
			height: 300,
			[theme.breakpoints.down('md')]: {
				height: 200,
				fontSize: '3em',
			},

			[theme.breakpoints.down('xs')]: {
				height: 160,
				fontSize: '3em',
			},
		},
		imageContainer: {
			display: 'flex',
			justifyContent: 'center',
			textAlign: 'center',
			paddingTop: 15,
			paddingBottom: 15,
		},
	}));

	const classes = useStyles();

	if (currentUser) {
		return (
			<>
				<Grid container>
					<Grid item xs={12}>
						<Box className={classes.hero}>
							<Link
								to="/collections/womens-trainers"
								className={classes.heroLink}
							>
								<Typography variant="h2">Your Favourite Pair</Typography>
								<Typography variant="h5">Shop Womens Trainers</Typography>
							</Link>
						</Box>
					</Grid>

					<Grid container>
						<Grid item xs={12} sm={12} md={4}>
							<Box className={classes.imageContainer}>
								<Link to="/collections/mens" className={classes.promoLink}>
									<img
										src="img/airjordan-red.jpg"
										alt=""
										className={classes.promoImage}
									/>
									<Typography variant="h5">Mens Shoes</Typography>
								</Link>
							</Box>
						</Grid>

						<Grid item xs={12} sm={12} md={4}>
							<Box className={classes.imageContainer}>
								<Link to="/collections/womens" className={classes.promoLink}>
									<img
										src="img/mint-flats.jpg"
										alt=""
										className={classes.promoImage}
									/>
									<Typography variant="h5">Womens Shoes</Typography>
								</Link>
							</Box>
						</Grid>

						<Grid item xs={12} sm={12} md={4}>
							<Box className={classes.imageContainer}>
								<Link
									to="/collections/womens-boots"
									className={classes.promoLink}
								>
									<img
										src="img/converse.jpg"
										alt=""
										className={classes.promoImage}
									/>
									<Typography variant="h5">Womens Boots</Typography>
								</Link>
							</Box>
						</Grid>
					</Grid>
				</Grid>
			</>
		);
	} else {
		return null;
	}
};

export default Home;
