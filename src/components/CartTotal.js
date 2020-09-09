import React, { useContext, useState, useEffect } from "react";
import {
	Typography,
	TextField,
	makeStyles,
	Snackbar,
	Box,
} from "@material-ui/core";
import { CartContext } from "../contexts/CartContext";
import MuiAlert from "@material-ui/lab/Alert";

const CartTotal = () => {
	const { total, subtotal } = useContext(CartContext);
	const acceptedPromoCode = "ABCD";
	const discountValue = 10;

	const [cartTotal, setCartTotal] = useState(0);

	const [promoCode, setPromoCode] = useState({
		input: "",
		alertSuccess: false,
		alertError: false,
		helperText: "",
		codeApplied: false,
		message: "remove code",
	});

	useEffect(() => {
		total && setCartTotal(total);
	}, [total]);

	const handleChange = (e) => {
		setPromoCode({
			...promoCode,
			[e.target.id]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (promoCode.input === acceptedPromoCode) {
			const newTotal = total - discountValue;
			setCartTotal(newTotal);

			setPromoCode({
				...promoCode,
				helperText: "Discount code accepted",
				codeApplied: true,
				alertSuccess: true,
			});
		} else {
			setPromoCode({
				...promoCode,
				helperText: "Discount code not valid",
				alertError: true,
			});

			setTimeout(() => {
				setPromoCode({
					...promoCode,
					alertError: false,
					helperText: "",
				});
			}, 2000);
		}
	};

	const handleRemoveCode = (e) => {
		setPromoCode({
			...promoCode,
			helperText: "",
			message: "",
			input: "",
		});

		setCartTotal(total);
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setPromoCode({
			...promoCode,
			alertSuccess: false,
		});
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
			<Box height="30%" pl={1} pb={2}>
				<Typography variant="body1" gutterBottom>
					Subtotal: £{`${subtotal.toFixed(2)}`}
				</Typography>
				<Typography variant="body1" gutterBottom>
					Delivery: FREE
				</Typography>
			</Box>

			<Box height="50%" display="flex" pt={1}>
				<form className={classes.root} onSubmit={handleSubmit}>
					<TextField
						id="input"
						label="Enter Promotional Code"
						variant="outlined"
						onChange={handleChange}
						value={promoCode.input}
						error={promoCode.alertError}
						helperText={promoCode.helperText}
					/>
				</form>

				<Typography variant="overline" gutterBottom onClick={handleRemoveCode}>
					{promoCode.codeApplied && `${promoCode.message}`}
				</Typography>
			</Box>

			<Box height="20%" pl={1}>
				<Typography variant="h6" gutterBottom>
					Total: £{`${cartTotal.toFixed(2)}`}
				</Typography>
			</Box>

			<Snackbar
				open={promoCode.alertSuccess}
				autoHideDuration={2000}
				onClose={handleClose}
			>
				<Alert onClose={handleClose} severity="success">
					Discount Applied
				</Alert>
			</Snackbar>
		</>
	);
};

export default CartTotal;
