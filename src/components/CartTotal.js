import React, { useContext, useState, useEffect } from "react";
import { Typography, TextField, makeStyles, Snackbar } from "@material-ui/core";
import { CartContext } from "../contexts/CartContext";
import MuiAlert from "@material-ui/lab/Alert";

const CartTotal = () => {
	const { total, subtotal } = useContext(CartContext);
	const acceptedPromoCode = "ABCD";
	const discountValue = 10;

	const [cartTotal, setCartTotal] = useState(0);
	const [promoCodeInput, setPromoCodeInput] = useState("");
	const [open, setOpen] = React.useState(false);
	const [error, setError] = React.useState(false);
	const [helperText, setHelperText] = React.useState("");

	const [codeApplied, setCodeApplied] = React.useState(false);
	const [removeCodeText, setRemoveCodeText] = React.useState("remove code");

	useEffect(() => {
		total && setCartTotal(total);
	}, [total]);

	const handleChange = (e) => {
		setPromoCodeInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (promoCodeInput === acceptedPromoCode) {
			setHelperText("Discount code accepted");
			const newTotal = total - discountValue;
			setCartTotal(newTotal);
			setCodeApplied(true);
			setOpen(true);
		} else {
			setError(true);
			setHelperText("Discount code not valid.");
			setTimeout(() => {
				setHelperText("");
				setError(false);
			}, 1500);

			setPromoCodeInput("");
		}
	};

	const handleRemoveCode = (e) => {
		setHelperText("");
		setCartTotal(total);
		setRemoveCodeText("");
		setPromoCodeInput("");
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}
		setOpen(false);
	};

	function Alert(props) {
		return <MuiAlert elevation={6} variant="filled" {...props} />;
	}

	const useStyles = makeStyles((theme) => ({
		root: {
			"& > *": {
				margin: theme.spacing(1),
				width: "25ch",
			},
		},
	}));

	const classes = useStyles();

	return (
		<>
			<Typography variant="body1" gutterBottom>
				Subtotal: £{`${subtotal.toFixed(2)}`}
			</Typography>
			<Typography variant="body1" gutterBottom>
				Delivery: FREE
			</Typography>

			<form className={classes.root} onSubmit={handleSubmit}>
				<TextField
					id="filled-basic"
					label="Enter Promotional Code"
					variant="outlined"
					onChange={handleChange}
					value={promoCodeInput}
					error={error}
					helperText={helperText}
				/>
			</form>

			<Typography variant="overline" gutterBottom onClick={handleRemoveCode}>
				{codeApplied && `${removeCodeText}`}
			</Typography>

			<Typography variant="h6" gutterBottom>
				Total: £{`${cartTotal.toFixed(2)}`}
			</Typography>

			<Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
				<Alert onClose={handleClose} severity="success">
					Discount Applied
				</Alert>
			</Snackbar>
		</>
	);
};

export default CartTotal;
