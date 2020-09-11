import React from "react";
import Menu from "./Menu";
import { Grid } from "@material-ui/core";
import TopNavBar from "./TopNavBar";
import PromoBar from "./PromoBar";

const Header = () => {
	return (
		<>
			<TopNavBar />
			<Grid container direction="column" justify="center" alignItems="center">
				<h2>Shoe Store</h2>
				<Menu />
			</Grid>
			<PromoBar />
		</>
	);
};

export default Header;
