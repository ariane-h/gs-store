import React from "react";
import { Toolbar, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import MenuDropdown from "./MenuDropdown";

const Menu = () => {
	const womensCollections = {
		title: "Womens",
		linkOne: "/collections/women",
		linkOneTitle: "All Womens Shoes",
		linkTwo: "/collections/women/trainers",
		linkTwoTitle: "Trainers",
		linkThree: "/collections/women/sandals",
		linkThreeTitle: "Sandals",
		linkFour: "/collections/women/boots",
		linkFourTitle: "Boots",
	};

	const mensCollections = {
		title: "Mens",
		linkOne: "/collections/men",
		linkOneTitle: "All Mens Shoes",
		linkTwo: "/collections/men/trainers",
		linkTwoTitle: "Trainers",
		linkThree: "/collections/men/shoes",
		linkThreeTitle: "Shoes",
		linkFour: "/collections/men/boots",
		linkFourTitle: "Boots",
	};

	return (
		<>
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
		</>
	);
};

export default Menu;
