import * as jQuery from "jquery";

export const corsProxyUrl = "https://cors.io/?";

export function getJson(url: string, useCorsProxy = false): Promise<any> {
    return new Promise((resolve, reject) => {
        return jQuery
            .ajax({
                method: "get",
                url: useCorsProxy ? `${corsProxyUrl}${url}` : url,
            })
            .done((json) => {
                resolve(json);
            })
            .fail((jqXHR) => {
                reject(jqXHR && jqXHR.responseText ? jqXHR.responseText : "error");
            });
    });
}

export function postJson(url: string, data: string): Promise<any> {
    return new Promise((resolve, reject) => {
        return jQuery
            .ajax({
                data,
                method: "post",
                url,
            })
            .done((json) => {
                resolve(json);
            })
            .fail((jqXHR) => {
                reject(jqXHR && jqXHR.responseText ? jqXHR.responseText : "error");
            });
    });
}

export function toParam(param: any): string {
    return jQuery.param(param);
}

export function trim(value: string): string {
    return jQuery.trim(value);
}
