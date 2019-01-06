import * as React from "react";
import { ISearchResult } from "../Search";
import { FooterComponent as Footer } from "./Footer";
import { HeaderComponent as Header } from "./Header";
import { IResultProps } from "./Result";
import { ResultSectionComponent as ResultSection } from "./ResultSection";
import { SearchSectionComponent as SearchSection } from "./SearchSection";

export interface IAppProps {
    onSearch: (term: string) => Promise<ISearchResult[]>;
}

export interface IAppState {
    isSearching: boolean;
    results: IResultProps[];
    term: string;
}

export class AppComponent extends React.Component<IAppProps, IAppState> {

    constructor(props: any, context?: any) {
        super(props, context);

        this.state = {
            isSearching: false,
            results: [],
            term: "",
        };
    }

    public render(): React.ReactNode {
        return (
            <div className="container-fluid">
                <Header />
                <SearchSection
                    onSearch={this.handleSearch}
                    isDisabled={this.state.isSearching}
                />
                {this.state.term
                    ? <ResultSection
                        term={this.state.term}
                        isSearching={this.state.isSearching}
                        results={this.state.results}
                    />
                    : null}
                <Footer />
            </div>
        );
    }

    private handleSearch = (term: string) => {
        this.props.onSearch(term)
            .then((results) => this.handleSearchResults(results));

        this.setState({
            isSearching: true,
            results: [],
            term,
        });
    }

    private handleSearchResults = (results: ISearchResult[]) => {
        if (!results) {
            this.setState({
                isSearching: false,
                results: [],
            });
            return;
        }
        this.setState({
            isSearching: false,
            results: results
                .filter((result) => {
                    // Only show results with matches
                    return result && result.count;
                })
                .sort((a, b) => {
                    // Show result with most matches first
                    return a && b
                        ? b.count - a.count
                        : 0;
                }),
        });
    }

}
