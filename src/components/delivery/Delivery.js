import React from "react";
import {
	Container,
	Grid,
	Typography,
	makeStyles,
	TableContainer,
	Paper,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
} from "@material-ui/core";

const Delivery = () => {
	const createData = (service, estimate, cost) => {
		return { service, estimate, cost };
	};

	const rows = [
		createData("Economy", "3-5 working days", "FREE"),
		createData("Standard", "1-2 working days", 3.95),
		createData("Next Day", "Mon-Fri Next Working Day", 5.95),
		createData("International", "5-10 working days", 14.95),
	];

	const useStyles = makeStyles((theme) => ({
		heroContent: {
			padding: theme.spacing(4, 0, 6),
		},
		table: {
			minWidth: 370,
		},
	}));

	const classes = useStyles();
	return (
		<>
			<Container maxWidth="sm" component="main" className={classes.heroContent}>
				<Typography
					component="h1"
					variant="h5"
					align="center"
					color="textPrimary"
					gutterBottom
				>
					Delivery Info
				</Typography>
				<Typography
					variant="subtitle1"
					align="center"
					color="textSecondary"
					component="p"
				>
					We deliver to you 7 days a week
				</Typography>
			</Container>

			<Container maxWidth="sm" component="main">
				<Grid container spacing={5} alignItems="flex-end">
					<TableContainer component={Paper}>
						<Table className={classes.table} aria-label="delivery table">
							<TableHead>
								<TableRow>
									<TableCell align="left">Service</TableCell>
									<TableCell align="right">Estimate</TableCell>
									<TableCell align="right">Cost</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.map((row) => (
									<TableRow key={row.service}>
										<TableCell component="th" scope="row" align="left">
											{row.service}
										</TableCell>
										<TableCell align="right">{row.estimate}</TableCell>
										<TableCell align="right">{row.cost}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Grid>
			</Container>
		</>
	);
};

export default Delivery;
