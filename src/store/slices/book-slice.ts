import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import booksService from "../../api/books/books-service";
import {IData} from "../../api/books/types";
import {BookState} from "./types";

const initialState: BookState = {
    books: [],
    isLoading: false,
    orderBy: "relevance",
    category: "all",
    filteredBooks: [],
    totalItems: 0
}

const getBooksAsync = createAsyncThunk("book/get", async ({inputValue, orderBy, maxResults, category, visible}: IData) => {
    try {
        return await booksService.getAllBooks(inputValue, orderBy, maxResults, category, visible);
    } catch(e) {
        throw new Error("Fetching data failed!");
    }
});

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        getBooks(state, action) {
            state.books = [ ...action.payload.items];
        },
        filterForDetailsPage(state, action) {
            state.filteredBooks = state.books.filter((book) => book.id === action.payload);
        },
        setIsLoading(state, action) {
          state.isLoading = action.payload.isLoading;
        },
        setSorting(state, action) {
            state.orderBy = action.payload;
        },
        setCategory(state, action) {
            state.category = action.payload;
        },
        getTotalItems(state, action) {
            state.totalItems = action.payload;
        }
    },
    extraReducers: {
        [getBooksAsync.fulfilled.type]: (state, action) => {
            state.books = [...action.payload.items];
            state.isLoading = false;
        },
        [getBooksAsync.pending.type]: (state) => {
            state.isLoading = true;
        },
        [getBooksAsync.rejected.type]: (state) => {
            state.isLoading = false;
        }
    }
});
export const {getBooks, filterForDetailsPage, setIsLoading, setSorting, setCategory, getTotalItems} = bookSlice.actions;
export {getBooksAsync};

export default bookSlice.reducer;