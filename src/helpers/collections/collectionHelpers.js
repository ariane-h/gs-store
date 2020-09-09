// filter collection products
export const filterCollectionProducts = (
	collectionId,
	setCollectionProducts,
	products
) => {
	const filterProducts = async () => {
		const collectionProducts = products.filter(
			(product) => collectionId && product.collections[collectionId]
		);
		return collectionProducts;
	};

	//update the state
	const updateCollectionProducts = async () => {
		const matchingProducts = await filterProducts();
		setCollectionProducts(matchingProducts);
		return { matchingProducts };
	};

	updateCollectionProducts();
};

// filter collection products by search term
export const searchProductsByTitle = (searchTerm, collectionProducts) => {
	let searchResults = collectionProducts.filter((product) => {
		return product.title.toLowerCase().includes(searchTerm);
	});

	return searchResults;
};
