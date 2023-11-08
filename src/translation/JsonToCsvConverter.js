import { Parser } from "json2csv";
import fs from 'fs';


    function jsonToCsv(lang){
        const json = JSON.parse(fs.readFileSync(`src/translation/languages/${lang}.json`, 'utf8'));
    
        const fields = ['landingPage', 'backofficePage'];
        const opts = { fields };

        try {
            const parser = new Parser(opts);
            const csv = parser.parse(json);
            fs.writeFile(`src/translation/files_csv/${lang}.csv`, '\ufeff' + csv, 'utf8', function(err) {
                if (err) throw err;
                console.log(`${lang}.csv file updated!`);
            });
        } catch (error) {
            console.error(error);
        }
    }

jsonToCsv('catala')
jsonToCsv('english')
jsonToCsv('espanol')

// Comando a usar para ejecutar el script: node src/translation/JsonToCsvConverter.js