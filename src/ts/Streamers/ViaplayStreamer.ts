import { ISearchResult } from "../Search";
import { getJson, toParam } from "../Utils";
import { IStreamer } from "./Streamer";

/**
 * Sample URL; https://content.viaplay.se/pcdash-se/search?query=mysearchterm
 */
export class ViaplayStreamer implements IStreamer {

    private static readonly url = "https://content.viaplay.se/pcdash-se/search";

    public readonly name = "Viaplay";

    public readonly href = "https://viaplay.se/";

    public search(term: string): Promise<ISearchResult> {
        const param = toParam({
            query: term,
        });
        return getJson(`${ViaplayStreamer.url}?${param}`)
            .then((json: any) => {
                const count = json &&
                    json._embedded &&
                    json._embedded["viaplay:blocks"] &&
                    json._embedded["viaplay:blocks"][0] &&
                    json._embedded["viaplay:blocks"][0].totalProductCount
                    ? json._embedded["viaplay:blocks"][0].totalProductCount
                    : 0;
                return {
                    name: this.name,
                    href: this.href,
                    count,
                };
            },
            (reason: any) => {
                return {
                    name: this.name,
                    href: this.href,
                    count: 0,
                    error: reason,
                };
            });
    }

}
