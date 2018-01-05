import { getJson, toParam } from "../Utils";
import { IStreamer } from "./Streamer";

/**
 * Sample URL; https://content.viaplay.se/pcdash-se/search?query=mysearchterm
 */
export class ViaplayStreamer implements IStreamer {

    private static readonly url = "https://content.viaplay.se/pcdash-se/search";

    public readonly name = "Viaplay";

    public readonly href = "https://viaplay.se/";

    public count = 0;

    public search(term: string) {
        this.count = 0;
        const param = toParam({
            query: term,
        });
        getJson(`${ViaplayStreamer.url}?${param}`)
            .done((json: any) => {
                this.count = json &&
                    json._embedded &&
                    json._embedded["viaplay:blocks"] &&
                    json._embedded["viaplay:blocks"][0] &&
                    json._embedded["viaplay:blocks"][0].totalProductCount
                    ? json._embedded["viaplay:blocks"][0].totalProductCount
                    : 0;
            })
            .fail((jqXHR: JQueryXHR) => {
                this.count = 0;
            });
    }

}
