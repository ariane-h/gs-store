import { Box, Container, makeStyles } from '@material-ui/core';
import React from 'react';

const NotFound = () => {
	const useStyles = makeStyles((theme) => ({
		message: {
			display: 'flex',
			justifyContent: 'center',
			paddingTop: '40px',
			paddingBottom: '40px',
		},
	}));

	const classes = useStyles();

	return (
		<Container maxWidth="sm">
			<Box className={classes.message}>
				<h1>Page Not Found</h1>
			</Box>
		</Container>
	);
};

export default NotFound;
