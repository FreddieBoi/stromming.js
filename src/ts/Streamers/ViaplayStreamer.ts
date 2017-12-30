import { IStreamer } from "./Streamer";
import { getJson, toParam } from "../Utils";

/**
 * Sample URL; https://content.viaplay.se/pcdash-se/search?query=mysearchterm
 */
export class ViaplayStreamer implements IStreamer {

    private static readonly url = "https://content.viaplay.se/pcdash-se/search";

    public readonly name = "Viaplay";

    public count = 0;

    public search(term: string) {
        this.count = 0;
        let param = toParam({
            "query": term
        });
        getJson(`${ViaplayStreamer.url}?${param}`)
            .done((data: any) => {
                this.count = data &&
                    data["_embedded"] &&
                    data["_embedded"]["viaplay:blocks"] &&
                    data["_embedded"]["viaplay:blocks"][0] &&
                    data["_embedded"]["viaplay:blocks"][0]["totalProductCount"]
                    ? data["_embedded"]["viaplay:blocks"][0]["totalProductCount"]
                    : 0;
            })
            .fail((jqXHR: JQueryXHR) => {
                this.count = 0;
            });
    }

}
