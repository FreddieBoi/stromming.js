export interface IStreamer {

    readonly name: string;

    readonly href: string;

    count: number;

    search(term: string): void;

}
