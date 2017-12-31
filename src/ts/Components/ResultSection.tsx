import * as React from "react";
import { IResultProps } from "./Result";
import { ResultListComponent as ResultList } from "./ResultList";
import { ResultHeadingComponent as ResultHeading } from "./ResultHeading";

export interface IResultSectionProps {
    term: string;
    results: IResultProps[];
}

export class ResultSectionComponent extends React.Component<IResultSectionProps, any> {

    public render(): React.ReactNode {
        return (
            <section className="section-result">
                <ResultHeading term={this.props.term} count={this.props.results ? this.props.results.length : 0} />
                {this.props.results && this.props.results.length > 0
                    ? <ResultList results={this.props.results} />
                    : null}
            </section>
        );
    }

}
