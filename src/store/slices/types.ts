import {IBook} from "../../pages/BooksPage/Books-Types";

export interface BookState {
    books: IBook[];
    isLoading: boolean;
    orderBy: string;
    category: string;
    filteredBooks: IBook[];
    totalItems: number;
}