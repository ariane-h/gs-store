export const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_CART":
			return [
				...state,
				{
					id: action.cartItem.id,
					sku: action.cartItem.sku,
					orderQty: action.cartItem.orderQty,
				},
			];
		case "INCREASE_QTY":
			const productToIncrease = state.find(
				(product) => product.sku === action.sku
			);
			productToIncrease.orderQty += 1;
			return [...state];

		case "DECREASE_QTY":
			const productToDecrease = state.find(
				(product) => product.sku === action.sku
			);
			productToDecrease.orderQty += 1;
			return [...state];

		case "REMOVE_FROM_CART":
			return state.filter((product) => product.sku !== action.sku);

		default:
			return state;
	}
};
