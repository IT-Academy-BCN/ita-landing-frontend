import csv from "csvtojson";
import fs from 'fs';

// SIN EXPRESIONES REGULARES --> para que funcione en JsonToCsvConverter.js
export function csvToJsonConverter(lang) {
    const csvFilePath = `src/translation/files_csv/${lang}.csv`;

    csv()
        .fromFile(csvFilePath)
        .then((jsonArray) => {
            const jsonData = jsonArray[0];
            
            fs.writeFile(`src/translation/languages/${lang}.json`, JSON.stringify(jsonData, null, 4), 'utf8', function (err) {
                if (err) throw err;
                console.log(`${lang}.json file updated!`);
            });
        });
}

csvToJsonConverter('catala')
csvToJsonConverter('english')
csvToJsonConverter('espanol')