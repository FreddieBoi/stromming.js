import * as jQuery from "jquery";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppComponent as App } from "./Components/App";
import { search } from "./Search";
import { SfAnytimeStreamer } from "./Streamers/SfAnytimeStreamer";
import { SvtPlayStreamer } from "./Streamers/SvtPlayStreamer";
import { ViaplayStreamer } from "./Streamers/ViaplayStreamer";

jQuery(document).ready(() => {
    const streamers = [
        new ViaplayStreamer(),
        new SvtPlayStreamer(),
        new SfAnytimeStreamer(),
    ];
    const onSearch = (term: string) => {
        return search(term, streamers);
    };
    ReactDOM.render(<App onSearch={onSearch} />, document.getElementById("react-root"));
});
