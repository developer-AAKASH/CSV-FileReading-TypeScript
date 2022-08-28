import fs from "fs";
import {MatchResult} from "./MatchResult";

// <Type> is for type generics
export abstract class CsvFileReader<T> {
    data: T[] = [];

    constructor(public fileName: string) {}

    read(): void {
        this.data = fs.readFileSync( this.fileName, {
            encoding: 'utf-8'
        }).split('\n')
            .map((row: string) => {
                return row.split(',');
            })
            .map(this.mapRow);
    }

    abstract mapRow(row: string[]): T;
}