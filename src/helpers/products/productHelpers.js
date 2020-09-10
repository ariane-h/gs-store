export const fetchProduct = async (products, productId) => {
	return await products.find((product) => product.id === productId);
};
