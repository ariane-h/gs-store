import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import {
	FacebookShareButton,
	TwitterShareButton,
	WhatsappShareButton,
} from "react-share";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

const ProductSocialShareButtons = ({ title }) => {
	const useStyles = makeStyles((theme) => ({
		container: {
			display: "flex",
			justifyContent: "space-around",
			width: "40%",
			color: "dimgrey",
			border: "solid 1px",
			padding: "10px",
			borderRadius: "4px",
			borderColor: "lightgray",
		},
	}));

	const classes = useStyles();
	return (
		<>
			<Box className={classes.container}>
				<FacebookShareButton
					url={`www.goldenshoe.co.uk/${window.location.pathname}`}
					quote={`Check out these neat ${title}`}
				>
					<FacebookIcon size={40} />
				</FacebookShareButton>
				<TwitterShareButton
					url={`www.goldenshoe.co.uk/${window.location.pathname}`}
					title={`Check out these neat ${title}`}
				>
					<TwitterIcon size={40} />
				</TwitterShareButton>
				<WhatsappShareButton
					url={`www.goldenshoe.co.uk/${window.location.pathname}`}
					title={`Check out these neat ${title}`}
					separator=":: "
					className="Demo__some-network__share-button"
				>
					<WhatsAppIcon size={40} />
				</WhatsappShareButton>
			</Box>
		</>
	);
};

export default ProductSocialShareButtons;
