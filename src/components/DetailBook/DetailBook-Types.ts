import {ReactNode} from "react";

export interface IDetailsBook {
    category: ReactNode[];
    picture: string;
    title: string;
    authors: ReactNode[];
    description: string;
}