import React, { useState } from "react";
import { makeStyles, Paper, InputBase, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { withRouter } from "react-router-dom";

const SearchBar = (props) => {
	const [query, setQuery] = useState("");

	const handleChange = (e) => {
		setQuery(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setQuery("");
		props.history.push(`/search/?s=${query}`);
	};

	const useStyles = makeStyles((theme) => ({
		searchBar: {
			padding: "2px 4px",
			display: "flex",
			alignItems: "center",
			width: 250,
			margin: "8px 10px",
			height: "40px",
		},
		input: {
			marginLeft: theme.spacing(1),
			flex: 1,
		},
		iconButton: {
			padding: 10,
		},
	}));

	const classes = useStyles();
	return (
		<Paper
			component="form"
			className={classes.searchBar}
			onSubmit={handleSubmit}
			elevation={1}
		>
			<InputBase
				id="search-input"
				className={classes.input}
				placeholder="Search the shop"
				inputProps={{ "aria-label": "search the shop" }}
				value={query}
				onChange={handleChange}
			/>

			<IconButton
				type="submit"
				className={classes.iconButton}
				aria-label="search"
			>
				<SearchIcon />
			</IconButton>
		</Paper>
	);
};

export default withRouter(SearchBar);
