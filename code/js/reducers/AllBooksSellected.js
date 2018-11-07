export default function (state=null, action) {
	switch (action.type) {
		 case "ALL_BOOK_SELECTED":
		 return action.payload;
		 break;
		 
		default:
		 return state;

	}
	
}
