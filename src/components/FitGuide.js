import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { Box } from "@material-ui/core";

const FitGuide = () => {
	const useStyles = makeStyles({
		root: {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
		},
		slider: {
			width: 200,
			textAlign: "center",
		},
	});

	const classes = useStyles();
	const [value, setValue] = React.useState(30);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<>
			<Box className={classes.root} p={2}>
				<div className={classes.slider}>
					<Typography id="d-slider" gutterBottom>
						Average Size Rating
					</Typography>
					<Grid container spacing={2}>
						<Grid item>
							<Typography variant="caption">smaller</Typography>
						</Grid>
						<Grid item xs>
							<Slider
								disabled
								value={value}
								onChange={handleChange}
								aria-labelledby="continuous-slider"
							/>
						</Grid>
						<Grid item>
							<Typography variant="caption">larger</Typography>
						</Grid>
					</Grid>
				</div>
			</Box>
		</>
	);
};

export default FitGuide;
