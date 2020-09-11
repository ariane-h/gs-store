export const addToCart = (product, dispatch) => {
	dispatch({
		type: "ADD_TO_CART",
		product: {
			id: product.id,
			sku: product.sku,
			orderQty: product.orderQty,
			imageUrl: product.imageUrl,
			size: product.size,
			price: product.price,
			title: product.title,
			availableQty: product.availableQty,
		},
	});
};

export const increaseOrderQuantity = (newQty, sku, dispatch) => {
	dispatch({
		type: "INCREASE_QTY",
		sku,
		newQty,
	});
};
