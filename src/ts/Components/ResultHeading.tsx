import * as React from "react";

export interface IResultHeadingProps {
    term: string;
    count: number;
}

export class ResultHeadingComponent extends React.Component<IResultHeadingProps, any> {

    public render(): React.ReactNode {
        return (
            <div>
                {this.props.count
                    ? <span>
                        Found <strong>{this.props.count}</strong> content
                        match{this.props.count === 1 ? "" : "es"} for <strong>{this.props.term}</strong>! :D
                    </span>
                    : <span>
                        No content match for <strong>{this.props.term}</strong> :(
                            </span>
                }
            </div>
        );
    }

}
