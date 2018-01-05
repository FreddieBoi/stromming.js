import { ISearchResult } from "../Search";

export interface IStreamer {

    readonly name: string;

    readonly href: string;

    search(term: string): Promise<ISearchResult>;

}
