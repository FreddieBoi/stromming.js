import * as React from "react";
import { IResultProps } from "./Result";
import { ResultHeadingComponent as ResultHeading } from "./ResultHeading";
import { ResultListComponent as ResultList } from "./ResultList";

export interface IResultSectionProps {
    term: string;
    isSearching: boolean;
    results: IResultProps[];
}

export class ResultSectionComponent extends React.Component<IResultSectionProps, any> {

    public render(): React.ReactNode {
        const count = this.props.results
            ? this.props.results
                .map((result) => result ? result.count : 0)
                .reduce((total, current) => total + current, 0)
            : 0;
        return (
            <section className="section-result">
                {this.props.isSearching ?
                    <p>Searching for <strong>{this.props.term}</strong>...</p>
                    : <div>
                        <ResultHeading
                            term={this.props.term}
                            count={count}
                        />
                        {this.props.results && this.props.results.length > 0
                            ? <ResultList
                                results={this.props.results}
                            />
                            : null}
                    </div>
                }
            </section>
        );
    }

}
