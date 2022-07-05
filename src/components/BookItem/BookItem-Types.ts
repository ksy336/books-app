import {ReactNode} from "react";

export interface IBookItem {
    category: ReactNode[];
    picture: string;
    title: string;
    authors: ReactNode[];
}