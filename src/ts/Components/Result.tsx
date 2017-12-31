import * as React from "react";

export interface IResultProps {
    name: string;
    href: string;
    count: number;
}

export class ResultComponent extends React.Component<IResultProps, any> {

    public render(): React.ReactNode {
        return (
            <li className="result">
                <a className="result-name" href={this.props.href}>{this.props.name}</a> has <strong className="h4 result-count">{this.props.count}</strong> content match{this.props.count === 1 ? "" : "es"}!
            </li>
        );
    }

}
