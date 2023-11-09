import csv from "csvtojson";
import fs from 'fs';

// CON EXPRESIONES REGULARES --> para que funcione en i18n
export function csvToJsonI18n(lang){
    const csvFilePath = `src/translation/files_csv/${lang}.csv`;
    csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        const jsonString = JSON.stringify(jsonObj[0]).replace(/\\/g, '');
        const cleanedJsonString = jsonString.replace(/"landingPage":"{(.+?)}"/g, '"landingPage":{$1}').replace(/"backofficePage":"{(.+?)}"/g, '"backofficePage":{$1}');
        const prettyJsonString = JSON.stringify(JSON.parse(cleanedJsonString), null, 4);
        fs.writeFile(`src/translation/languages/${lang}.json`, '\ufeff' + prettyJsonString, 'utf8', function(err) {
            if (err) throw err;
            console.log(`${lang}.json file updated!`);
        });
    });
}

csvToJsonI18n('catala')
csvToJsonI18n('english')
csvToJsonI18n('espanol')

// Comando a usar para ejecutar convertir de JSON a CSV: 
// node src/translation/CsvToJsonConverter_i18n.js