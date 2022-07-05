import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IBook} from "../../pages/Books/Books-Types";
import booksService from "../../api/books/books-service";
import {IData} from "../../api/books/types";

export interface BookState {
  books: IBook[];
  isLoading: boolean;
  orderBy: string;
  category: string;
}

const initialState: BookState = {
    books: [],
    isLoading: false,
    orderBy: "relevance",
    category: "all"
}

const getBooksAsync = createAsyncThunk("book/get", async ({inputValue, orderBy, maxResults, category}: IData) => {
    try {
        return await booksService.getAllBooks(inputValue, orderBy, maxResults, category);
    } catch(e) {
        throw new Error("Fetching data failed!");
    }
});

const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
      // filterForDetailsPage(state, action) {
      //     state.books = state.books.filter((book) => book.id !== action.payload.id)
      // },
        setIsLoading(state, action) {
          state.isLoading = action.payload.isLoading;
        },
        setSorting(state, action) {
            state.orderBy = action.payload;
        },
        setCategory(state, action) {
            state.category = action.payload;
        }
    },
    extraReducers: {
        [getBooksAsync.fulfilled.type]: (state, action) => {
            state.books = action.payload;
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
export const {setIsLoading, setSorting, setCategory} = bookSlice.actions;
export {getBooksAsync};

export default bookSlice.reducer;