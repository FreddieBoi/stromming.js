import * as React from "react";

export class HeaderComponent extends React.Component<any, any> {

    public render(): React.ReactNode {
        return (
            <header>
                <h1>Stromming</h1>
                <p className="lead">
                    Strömming (or more internationally Stromming) is a simple application to use when you want to find
                    what streaming services have the content you want to watch.
                </p>
            </header>
        );
    }

}
