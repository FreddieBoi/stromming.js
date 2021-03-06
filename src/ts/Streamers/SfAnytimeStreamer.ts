﻿import { ISearchResult } from "../Search";
import { postJson, toParam } from "../Utils";
import { IStreamer } from "./Streamer";

/**
 * Sample URL; https://e38fd90mob-dsn.algolia.net/1/indexes//queries?x-algolia-agent=Algolia%20for%20vanilla%20JavaScript%20(lite)%203.21.1%3Binstantsearch.js%201.11.7%3BJS%20Helper%202.19.0&x-algolia-application-id=E38FD90MOB&x-algolia-api-key=3f56a452156f1a76c8939af1798a2335
 */
export class SfAnytimeStreamer implements IStreamer {

    private static readonly url = "https://e38fd90mob-dsn.algolia.net/1/indexes/*/queries?x-algolia-agent=Algolia%20for%20vanilla%20JavaScript%20(lite)%203.21.1%3Binstantsearch.js%201.11.7%3BJS%20Helper%202.19.0&x-algolia-application-id=E38FD90MOB&x-algolia-api-key=3f56a452156f1a76c8939af1798a2335";

    public readonly name = "SF Anytime";

    public readonly href = "https://www.sfanytime.com/sv";

    public search(term: string): Promise<ISearchResult> {
        const param = toParam({
            query: term,
        });
        const data = `{"requests":[{"indexName":"prod_sfanytime_movies","params":"${param}&numericFilters=adult%3D0%2C%20available_in_se%3D1&hitsPerPage=60&maxValuesPerFacet=3&page=0&attributesToRetrieve=mediaid%2Cproducttype%2Cproducttypeid%2Ctitle%2Ctitle_sv%2Ctitle_no%2Ctitle_da%2Ctitle_fi%2Ccover_id%2Ccover_no%2Ccover_sv%2Ccover_da%2Ccover_fi&distinct=true&facets=%5B%5D&tagFilters="}]}`;
        return postJson(SfAnytimeStreamer.url, data)
            .then((json: any) => {
                const count = json &&
                    json.results &&
                    json.results[0] &&
                    json.results[0].nbHits
                    ? json.results[0].nbHits
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
