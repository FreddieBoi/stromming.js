import { ViaplayStreamer } from "./Streamers/ViaplayStreamer";
import { SvtPlayStreamer } from "./Streamers/SvtPlayStreamer";
import { SfAnytimeStreamer } from "./Streamers/SfAnytimeStreamer";
import { search } from "./Searcher";
import * as jQuery from "jquery";

jQuery(document).ready(() => {
    let streamers = [
        new ViaplayStreamer(),
        new SvtPlayStreamer(),
        new SfAnytimeStreamer()
    ];
    jQuery("#section-search").find("form").on("submit", (event: any) => {
        event.preventDefault();
        let term = jQuery(event.target).find("#input-search").val() as string;
        search(term, streamers);
    });
});
