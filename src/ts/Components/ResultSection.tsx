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
        const count: number = this.props.results
            ? this.props.results
                .map((result) => result ? result.count : 0)
                .reduce((total, current) => total + current)
            : 0;
        return (
            <section className="section-result">
                <ResultHeading term={this.props.term} count={count} />
                {this.props.results && this.props.results.length > 0
                    ? <ResultList results={this.props.results} />
                    : null}
            </section>
        );
    }

}
