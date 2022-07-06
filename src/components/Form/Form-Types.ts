import {ChangeEvent} from "react";
import {IBook} from "../../pages/BooksPage/Books-Types";

export interface IForm {
    formSubmit: (e: ChangeEvent<HTMLFormElement>) => void;
    inputValue: string;
    changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
    books: IBook[];
    isLoading: boolean;
    selectSortingHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
    orderBy: string;
    category: string;
    selectCategoryHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
}