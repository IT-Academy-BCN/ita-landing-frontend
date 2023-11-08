import csv from "csvtojson";
import fs from 'fs';

// CON EXPRESIONES REGULARES --> para que funcione en i18n
// function csvToJson(lang){
//     const csvFilePath = `src/translation/files_csv/${lang}.csv`;
//     csv()
//     .fromFile(csvFilePath)
//     .then((jsonObj) => {
//         const jsonString = JSON.stringify(jsonObj[0]).replace(/\\/g, '');
//         const cleanedJsonString = jsonString.replace(/"landingPage":"{(.+?)}"/g, '"landingPage":{$1}').replace(/"backofficePage":"{(.+?)}"/g, '"backofficePage":{$1}');
//         const prettyJsonString = JSON.stringify(JSON.parse(cleanedJsonString), null, 4);
//         fs.writeFile(`src/translation/languages/${lang}.json`, '\ufeff' + prettyJsonString, 'utf8', function(err) {
//             if (err) throw err;
//             console.log(`${lang}.json file updated!`);
//         });
//     });
// }

// SIN EXPRESIONES REGULARES --> para que funcione en JsonToCsvConverter.js
function csvToJson(lang) {
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

csvToJson('catala')
csvToJson('english')
csvToJson('espanol')

// Comando a usar para ejecutar el script: node src/translation/CsvToJsonConverter.js