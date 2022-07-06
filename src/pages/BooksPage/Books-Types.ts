import {ChangeEvent, ReactNode} from "react";

export interface IBook {
    id: string;
    volumeInfo: {
        categories: ReactNode[],
        imageLinks: {
            thumbnail: string,
        },
        title: string,
        authors: ReactNode[]
    };

}
export interface IBooksSearch {
    formSubmit: (e: ChangeEvent<HTMLFormElement>) => void;
    inputValue: string;
    changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
    books: IBook[];
    isLoading: boolean;
    selectSortingHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
    orderBy: string;
    category: string;
    selectCategoryHandler: (e: ChangeEvent<HTMLSelectElement>) => void;
    totalItems: number;
    showMoreItems: () => void;
    visible: number;
}