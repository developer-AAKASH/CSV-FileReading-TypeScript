import {CsvFileReader} from "./Inheritance/CsvFileReader";
import {MatchResult} from "./MatchResult";
import {MatchReader} from "./MatchReader";
import {CSVFileReader} from "./CSVFileReader";

const csvFileReader = new CSVFileReader('football.csv');

const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWins = 0;

for (let match of matchReader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins} matches !!`);