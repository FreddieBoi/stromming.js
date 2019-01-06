import * as React from "react";
import { SearchFormComponent as SearchForm } from "./SearchForm";

export interface ISearchSectionProps {
    onSearch: (term: string) => void;
    isDisabled: boolean;
}

export class SearchSectionComponent extends React.Component<ISearchSectionProps, any> {

    public render(): React.ReactNode {
        return (
            <section className="section-search">
                <SearchForm
                    onSearch={this.props.onSearch}
                    isDisabled={this.props.isDisabled}
                />
            </section>
        );
    }

}
