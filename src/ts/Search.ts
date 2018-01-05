import * as jQuery from "jquery";
import { IStreamer } from "./Streamers/Streamer";

export interface ISearchResult {
    name: string;
    href: string;
    count: number;
}

export function search(term: string, streamers: IStreamer[]): ISearchResult[] {
    if (!jQuery.trim(term)) {
        console.error("No search term!");
        return [];
    }
    console.info(`Searching for "${term}"...`);
    let count = 0;
    for (const streamer of streamers) {
        try {
            streamer.search(term);
            count += streamer.count;
        } catch (error) {
            console.error(`Failed searching ${streamer.name}: ${error ? error.message : ""}`);
        }
    }
    if (count <= 0) {
        console.info("0... :(");
        return [];
    }
    console.info(`${count}! :D`);
    const results: ISearchResult[] = [];
    for (const streamer of streamers) {
        console.info(`${streamer.name}: ${streamer.count}`);
        const result: ISearchResult = {
            name: streamer.name,
            href: streamer.href,
            count: streamer.count,
        };
        results.push(result);
    }
    return results;
}
