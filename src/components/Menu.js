import React from "react";
import { Toolbar, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import MenuDropdown from "./MenuDropdown";

const Menu = () => {
	const womensCollections = {
		title: "Womens",
		linkOne: "/collections/womens",
		linkOneTitle: "All Womens Shoes",
		linkTwo: "/collections/womens-trainers",
		linkTwoTitle: "Trainers",
		linkThree: "/collections/womens-sandals",
		linkThreeTitle: "Sandals",
		linkFour: "/collections/womens-boots",
		linkFourTitle: "Boots",
	};

	const mensCollections = {
		title: "Mens",
		linkOne: "/collections/mens",
		linkOneTitle: "All Mens Shoes",
		linkTwo: "/collections/mens-trainers",
		linkTwoTitle: "Trainers",
		linkThree: "/collections/men-shoes",
		linkThreeTitle: "Shoes",
		linkFour: "/collections/mens-boots",
		linkFourTitle: "Boots",
	};

	return (
		<Toolbar>
			<Button color="inherit" component={NavLink} to="/">
				Home
			</Button>

			<MenuDropdown links={womensCollections} />
			<MenuDropdown links={mensCollections} />

			<Button color="inherit" component={NavLink} to="/cart">
				Cart
			</Button>
		</Toolbar>
	);
};

export default Menu;
