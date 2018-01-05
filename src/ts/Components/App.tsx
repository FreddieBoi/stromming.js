import * as React from "react";
import { FooterComponent as Footer } from "./Footer";
import { HeaderComponent as Header } from "./Header";
import { IResultProps } from "./Result";
import { ResultSectionComponent as ResultSection } from "./ResultSection";
import { SearchSectionComponent as SearchSection } from "./SearchSection";

export interface IAppProps {
    onSearch: (term: string) => IResultProps[];
}

export interface IAppState {
    term: string;
    results: IResultProps[];
}

export class AppComponent extends React.Component<IAppProps, IAppState> {

    constructor(props: any, context?: any) {
        super(props, context);

        this.state = {
            term: "",
            results: [],
        };
    }

    public render(): React.ReactNode {
        return (
            <div className="container-fluid">
                <Header />
                <SearchSection onSearch={this.handleSearch.bind(this)} />
                {this.state.term
                    ? <ResultSection term={this.state.term} results={this.state.results} />
                    : null}
                <Footer />
            </div>
        );
    }

    private handleSearch(term: string) {
        const results = this.props.onSearch(term)
            .filter((result) => {
                // only show results with matches
                return result && result.count;
            })
            .sort((a, b) => {
                // show result with most matches first
                return a && b
                    ? b.count - a.count
                    : 0;
            });
        this.setState({
            term,
            results,
        });
    }

}
