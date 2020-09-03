import React from "react";
import { Toolbar, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const Menu = () => {
	return (
		<Toolbar>
			<>
				<Button color="inherit" component={NavLink} to="/">
					Home
				</Button>

				<Button color="inherit" component={NavLink} to="/collections">
					Collections
				</Button>

				<Button color="inherit" component={NavLink} to="/products">
					Product
				</Button>
			</>
		</Toolbar>
	);
};

export default Menu;
