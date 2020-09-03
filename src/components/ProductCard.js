import React from "react";
import {
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
	makeStyles,
} from "@material-ui/core";

const ProductCard = (props) => {
	const { title, subtitle, description, imageUrl } = props;

	const useStyles = makeStyles((theme) => ({
		card: {
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-between",
		},
	}));

	const classes = useStyles(makeStyles);

	return (
		<Card className={classes.card}>
			<CardMedia
				component="img"
				alt="Contemplative Reptile"
				height="300"
				image={imageUrl}
				title={title}
			/>
			<CardHeader title={title} subheader={subtitle} />
			<CardContent>
				<Typography variant="body2" component="p">
					{description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Add To Cart</Button>
			</CardActions>
		</Card>
	);
};

export default ProductCard;
