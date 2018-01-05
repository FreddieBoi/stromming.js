import { IStreamer } from "./Streamers/Streamer";
import { trim } from "./Utils";

export interface ISearchResult {
    name: string;
    href: string;
    count: number;
    error?: string;
}

export function search(term: string, streamers: IStreamer[]): Promise<ISearchResult[]> {
    const searchTerm = trim(term);
    if (!searchTerm) {
        return Promise.reject("No search term!");
    }
    return Promise.all(streamers.map((streamer) => streamer.search(searchTerm)));
}
