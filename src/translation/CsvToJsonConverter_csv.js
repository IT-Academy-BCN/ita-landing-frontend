import csv from "csvtojson";
import fs from "fs";
const csvFilePath = `src/translation/files_csv/excel_traducciones.csv`;
let json = { ca: {}, es: {}, en: {} };
let languages = ["ca", "es", "en"];

export function csvToJsonConverter() {
  // Read csv file
  csv()
    .fromFile(csvFilePath)
    .then((jsonArray) => {
      // jsonArray -> array of csv rows
      jsonArray.forEach((row) => {
        // Locale with section
        if (row.section) {
          languages.forEach((lang) => {
            if (!row[lang]) return;
            if (!json[lang][row.section]) json[lang][row.section] = {};
            json[lang][row.section][row.key] = row[lang];
          });
          // Locale without section
        } else {
          languages.forEach((lang) => {
            if (!row[lang]) return;
            json[lang][row.key] = row[lang];
          });
        }
      });

      // Create Json files
      languages.forEach((lang) => {
        fs.writeFile(
          `src/translation/languages/${lang}.json`,
          JSON.stringify(json[lang], null, 4),
          "utf8",
          function (err) {
            if (err) throw err;
            console.log(`${lang}.json file updated!`);
          }
        );
      });
    });
}

csvToJsonConverter();
