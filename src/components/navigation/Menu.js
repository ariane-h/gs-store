import React from "react";
import { Toolbar, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import MenuDropdown from "./MenuDropdown";

const Menu = () => {
	const collectionLinksWomens = {
		title: "Womens",
		links: [
			{ src: "/collections/womens", desc: "All Womens Shoes" },
			{ src: "/collections/womens-trainers", desc: "Trainers" },
			{ src: "/collections/womens-shoes", desc: "Shoes" },
			{ src: "/collections/womens-boots", desc: "Boots" },
		],
	};

	const collectionLinksMens = {
		title: "Mens",
		links: [
			{ src: "/collections/mens", desc: "All Mens Shoes" },
			{ src: "/collections/mens-trainers", desc: "Trainers" },
			{ src: "/collections/mens-shoes", desc: "Shoes" },
			{ src: "/collections/mens-boots", desc: "Boots" },
		],
	};

	const collections = [collectionLinksWomens, collectionLinksMens];

	return (
		<Toolbar>
			<Button color="inherit" component={NavLink} to="/">
				Home
			</Button>

			{collections.map((collection) => (
				<MenuDropdown menuItems={collection} key={collection.title} />
			))}

			<Button color="inherit" component={NavLink} to="/cart">
				Cart
			</Button>
		</Toolbar>
	);
};

export default Menu;
