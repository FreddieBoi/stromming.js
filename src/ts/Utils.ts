import * as jQuery from "jquery";

export function getJson(url: string): JQueryXHR {
    return jQuery.ajax({
        method: "get",
        url: url,
        async: false
    });
}

export function postJson(url: string, data: string): JQueryXHR {
    return jQuery.ajax({
        method: "post",
        url: url,
        data: data,
        async: false
    });
}

export function toParam(param: any): string {
    return jQuery.param(param);
}
