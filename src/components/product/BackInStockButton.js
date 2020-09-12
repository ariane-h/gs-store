import React, { useState } from "react";
import {
	Button,
	Snackbar,
	makeStyles,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	TextField,
	DialogActions,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { grey } from "@material-ui/core/colors";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";

const BackInStockButton = (props) => {
	const [open, setOpen] = useState(false);
	const [openSuccess, setOpenSuccess] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleFormClose = () => {
		setOpen(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setOpenSuccess(true);
		handleFormClose();
	};

	const handleAlertClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpenSuccess(false);
	};

	function Alert(props) {
		return <MuiAlert elevation={6} variant="filled" {...props} />;
	}

	const useStyles = makeStyles((theme) => ({
		button: {
			width: "300px",
			height: "50px",
			color: grey[700],
		},
	}));

	const classes = useStyles();

	return (
		<>
			<Button
				variant="outlined"
				endIcon={<EmailRoundedIcon />}
				size="large"
				type="submit"
				className={classes.button}
				onClick={handleClickOpen}
				disableFocusRipple={true}
				disableRipple={true}
			>
				Request Stock
			</Button>

			<Dialog open={open} onClose={handleFormClose} aria-labelledby="title">
				<DialogTitle id="title">Product Not Currently Available</DialogTitle>
				<DialogContent>
					<DialogContentText>
						If you would like to know when this item is available, please input
						your email address in the field below.
					</DialogContentText>
					<form autoComplete="off" onSubmit={handleSubmit}>
						<TextField
							autoFocus
							margin="dense"
							id="name"
							label="Email Address"
							type="email"
							fullWidth
						/>
					</form>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleFormClose} color="primary">
						Cancel
					</Button>
					<Button onClick={handleSubmit} color="primary">
						Submit
					</Button>
				</DialogActions>
			</Dialog>

			<Snackbar
				open={openSuccess}
				autoHideDuration={2000}
				onClose={handleAlertClose}
			>
				<Alert onClose={handleAlertClose} severity="success">
					Notification Requested
				</Alert>
			</Snackbar>
		</>
	);
};

export default BackInStockButton;
