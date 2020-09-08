import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const FitGuide = () => {
	const useStyles = makeStyles({
		root: {
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
		<div className={classes.root}>
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
	);
};

export default FitGuide;
