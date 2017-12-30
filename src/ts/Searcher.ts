import { IStreamer } from "./Streamers/Streamer";
import * as jQuery from "jquery";

export function search(term: string, streamers: IStreamer[]) {
    if (!jQuery.trim(term)) {
        console.error("No search term!");
        return;
    }
    console.info(`Searching for "${term}"...`);
    let count = 0;
    for (let streamer of streamers) {
        try {
            streamer.search(term);
            count += streamer.count;
        } catch (error) {
            console.error(`Failed searching ${streamer.name}: ${error ? error.message : ""}`);
        }
    }
    if (count <= 0) {
        console.info("0... :(");
        return;
    }
    console.info(`${count}! :D`);
    for (let streamer of streamers) {
        console.info(`${streamer.name}: ${streamer.count}`);
    }
}
