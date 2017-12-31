import * as React from "react";
import { IResultProps, ResultComponent as Result } from "./Result";

export interface IResultListProps {
    results: IResultProps[];
}

export class ResultListComponent extends React.Component<IResultListProps, any> {

    public render(): React.ReactNode {
        const results = this.props.results.map((result) => {
            const key = `${result.name}-${result.count}`;
            return <Result key={key} name={result.name} href={result.href} count={result.count} />;
        });
        return (
            <ol className="list-unstyled list-result">
                {results}
            </ol>
        );
    }

}
