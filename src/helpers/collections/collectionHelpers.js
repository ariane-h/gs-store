// fetch products in a collection
export const fetchCollectionProducts = async (collectionId, products) => {
	const collectionProducts = await products.filter(
		(product) => collectionId && product.collections[collectionId]
	);
	return collectionProducts;
};

// filter collection products by search term
export const searchProductsByTitle = (searchTerm, collectionProducts) => {
	let searchResults = collectionProducts.filter((product) => {
		return product.title.toLowerCase().includes(searchTerm);
	});

	return searchResults;
};

// fetch collection details
export const fetchCollectionDetails = async (collections, collectionId) => {
	return await collections.find((collection) => collection.id === collectionId);
};
