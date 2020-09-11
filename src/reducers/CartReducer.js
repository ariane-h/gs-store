export const cartReducer = (state, action) => {
	console.log(state);
	switch (action.type) {
		case "ADD_TO_CART":
			return [...state, action.product];
		case "INCREASE_QTY":
			const productToIncrease = state.find(
				(product) => product.sku === action.sku
			);
			productToIncrease.orderQty = action.newQty;

			return [...state];

		// return state.map((product) => {
		// 	if (product.sku === action.sku) {
		// 		return Object.assign({}, product, {
		// 			orderQty: action.newQty,
		// 		});
		// 	}
		// 	return product;
		// });

		case "DECREASE_QTY":
			const productToDecrease = state.find(
				(product) => product.sku === action.sku
			);
			productToDecrease.orderQty -= 1;
			return [...state];

		case "REMOVE_FROM_CART":
			return state.filter((product) => product.sku !== action.sku);

		default:
			return state;
	}
};
