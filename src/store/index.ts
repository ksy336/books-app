import {configureStore} from "@reduxjs/toolkit";
import bookSlice from "./slices/book-slice";

const store = configureStore({
    reducer: {book: bookSlice}
});
export default store;