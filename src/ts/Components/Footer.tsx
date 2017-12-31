import * as React from "react";

export class FooterComponent extends React.Component<any, any> {

    public render(): React.ReactNode {
        return (
            <footer>
                <p>
                    Written by <a href="https://github.com/FreddieBoi">FreddieBoi</a>.
                </p>
            </footer>
        );
    }

}
