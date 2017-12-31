import * as jQuery from "jquery";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppComponent as App } from "./Components/App";
import { ViaplayStreamer } from "./Streamers/ViaplayStreamer";
import { SvtPlayStreamer } from "./Streamers/SvtPlayStreamer";
import { SfAnytimeStreamer } from "./Streamers/SfAnytimeStreamer";
import { search } from "./Search";

jQuery(document).ready(() => {
    let streamers = [
        new ViaplayStreamer(),
        new SvtPlayStreamer(),
        new SfAnytimeStreamer()
    ];
    let onSearch = (term: string) => {
        return search(term, streamers);
    };
    ReactDOM.render(
        <App onSearch={onSearch} />,
        document.getElementById("react-root")
    );
});
