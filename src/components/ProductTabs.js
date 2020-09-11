import React, { useState } from "react";
import { Box } from "@material-ui/core";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import DeliveryTabContent from "./DeliveryTabContent";
import ReturnsTabContent from "./ReturnsTabContent";
import SizeChartTabContent from "./SizeChartTabContent";

const ProductTabs = () => {
	const [value, setValue] = useState(0);

	function TabPanel(props) {
		const { children, value, index, ...other } = props;

		return (
			<div
				role="tabpanel"
				hidden={value !== index}
				id={`tabpanel-${index}`}
				aria-labelledby={`tab-${index}`}
				{...other}
			>
				{value === index && <Box p={3}>{children}</Box>}
			</div>
		);
	}

	TabPanel.propTypes = {
		children: PropTypes.node,
		index: PropTypes.any.isRequired,
		value: PropTypes.any.isRequired,
	};

	function a11yProps(index) {
		return {
			id: `tab-${index}`,
			"aria-controls": `tabpanel-${index}`,
		};
	}

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const useStyles = makeStyles((theme) => ({
		container: {
			flexGrow: 1,
		},
	}));

	const classes = useStyles();

	return (
		<Box className={classes.container} p={3}>
			<Tabs value={value} onChange={handleChange} aria-label="info tabs">
				<Tab label="Delivery" {...a11yProps(0)} />
				<Tab label="Returns" {...a11yProps(1)} />
				<Tab label="Size Chart" {...a11yProps(2)} />
			</Tabs>

			<TabPanel value={value} index={0}>
				<DeliveryTabContent />
			</TabPanel>
			<TabPanel value={value} index={1}>
				<ReturnsTabContent />
			</TabPanel>
			<TabPanel value={value} index={2}>
				<SizeChartTabContent />
			</TabPanel>
		</Box>
	);
};

export default ProductTabs;
