export const select = (book) => {
	return {
		type: "BOOK_SELECTED",
		payload: book
	}

};
export const selectAll = () => {
	return {
		type: "ALL_BOOK_SELECTED",
		//payload: book
	}

};
