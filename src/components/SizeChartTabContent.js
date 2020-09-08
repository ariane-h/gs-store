import React from "react";
import {
	Divider,
	Box,
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Paper,
	makeStyles,
} from "@material-ui/core";

const SizeChartTabContent = () => {
	const useStyles = makeStyles({
		table: {
			minWidth: 300,
		},
	});

	const classes = useStyles();
	return (
		<div>
			<Box pb={2}>
				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell align="center">UK</TableCell>
								<TableCell align="center">EU</TableCell>
								<TableCell align="center">US</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell align="center">5</TableCell>
								<TableCell align="center">38</TableCell>
								<TableCell align="center">7</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align="center">6</TableCell>
								<TableCell align="center">39</TableCell>
								<TableCell align="center">8</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align="center">7</TableCell>
								<TableCell align="center">40</TableCell>
								<TableCell align="center">9</TableCell>
							</TableRow>
							<TableRow>
								<TableCell align="center">8</TableCell>
								<TableCell align="center">41</TableCell>
								<TableCell align="center">10</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</Box>
			<Divider />
		</div>
	);
};

export default SizeChartTabContent;
