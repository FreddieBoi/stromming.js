import * as React from "react";

export interface ISearchFormProps {
    onSearch: (term: string) => void;
    disabled: boolean;
}

export interface ISearchFormState {
    term: string;
}

export class SearchFormComponent extends React.Component<ISearchFormProps, ISearchFormState> {

    constructor(props: ISearchFormProps, context?: any) {
        super(props, context);

        this.state = {
            term: "",
        };
    }

    public render(): React.ReactNode {
        return (
            <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group mr-2">
                    <input type="text"
                        className="form-control"
                        placeholder="Search content..."
                        value={this.state.term}
                        onChange={this.handleChange.bind(this)}
                        disabled={this.props.disabled} />
                </div>
                <button type="submit" className="btn btn-primary" disabled={this.props.disabled}>Search</button>
            </form>
        );
    }

    private handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        event.stopPropagation();
        this.props.onSearch(this.state.term);
        this.setState({
            term: "",
        });
    }

    private handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({
            term: event.target.value,
        });
    }

}
