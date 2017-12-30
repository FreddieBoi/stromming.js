export interface IStreamer {

    readonly name: string;

    readonly count: number;

    search(term: string): void;

}
