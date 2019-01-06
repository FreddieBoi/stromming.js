import { ISearchResult } from "../Search";
import { getJson, toParam } from "../Utils";
import { IStreamer } from "./Streamer";

/**
 * Sample URL; https://www.svtplay.se/api/search?q=mysearchterm
 */
export class SvtPlayStreamer implements IStreamer {

    private static readonly url = "https://www.svtplay.se/api/search";

    public readonly name = "SVT Play";

    public readonly href = "https://www.svtplay.se/";

    public search(term: string): Promise<ISearchResult> {
        const param = toParam({
            q: term,
        });
        return getJson(`${SvtPlayStreamer.url}?${param}`, true)
            .then((jsonString: string) => {
                const json = JSON.parse(jsonString);
                const count = json && json.totalResults
                    ? json.totalResults
                    : 0;
                return {
                    count,
                    href: this.href,
                    name: this.name,
                };
            },
            (reason: string) => {
                return {
                    count: 0,
                    error: reason,
                    href: this.href,
                    name: this.name,
                };
            });
    }

}
