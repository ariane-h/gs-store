export const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			return [...state, action.product];
		case "INCREASE_QTY":
			return state.map((product) => {
				if (product.sku === action.sku) {
					return { ...product, orderQty: action.newQty };
				}
				return product;
			});

		case "DECREASE_QTY":
			return state.map((product) => {
				if (product.sku === action.sku) {
					return { ...product, orderQty: action.newQty };
				}
				return product;
			});

		case "REMOVE_FROM_CART":
			return state.filter((product) => product.sku !== action.sku);

		default:
			return state;
	}
};
