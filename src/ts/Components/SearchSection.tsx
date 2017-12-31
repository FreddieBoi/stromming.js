import * as React from "react";
import { ISearchFormProps, SearchFormComponent as SearchForm } from "./SearchForm";

export interface ISearchSectionProps {
    onSearch: (term: string) => void;
}

export class SearchSectionComponent extends React.Component<ISearchSectionProps, any> {

    public render(): React.ReactNode {
        return (
            <section className="section-search">
                <SearchForm onSearch={this.props.onSearch} />
            </section>
        );
    }

}
