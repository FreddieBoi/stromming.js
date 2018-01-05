import { IStreamer } from "./Streamer";
import { getJson, toParam } from "./../Utils";

/**
 * Sample URL; https://www.svtplay.se/api/search?q=mysearchterm
 */
export class SvtPlayStreamer implements IStreamer {

    private static readonly url = "https://www.svtplay.se/api/search";

    public readonly name = "SVT Play";

    public readonly href = "https://www.svtplay.se/";

    public count = 0;

    public search(term: string) {
        this.count = 0;
        const param = toParam({
            q: term,
        });
        getJson(`${SvtPlayStreamer.url}?${param}`, true)
            .done((json: any) => {
                this.count = json && json.totalResults
                    ? json.totalResults
                    : 0;
            })
            .fail((jqXHR: JQueryXHR) => {
                this.count = 0;
            });
    }

}
