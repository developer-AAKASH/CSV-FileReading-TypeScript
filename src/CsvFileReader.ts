import fs from "fs";
import {dateStringToDate} from "./utils";
import {MatchResult} from "./MatchResult";

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
    data: MatchData[] = [];

    constructor(public fileName: string) {}

    read(): void {
        this.data = fs.readFileSync( this.fileName, {
            encoding: 'utf-8'
        }).split('\n')
            .map((row: string) => {
                return row.split(',');
            })
            .map((row: string[]): MatchData => {
                return [
                    dateStringToDate(row[0]),
                    row[1],
                    row[2],
                    parseInt(row[4]),
                    parseInt(row[5]),
                    row[5] as MatchResult, // Type Assertion
                    row[6]
                ];
            });
    }
}