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

jsonToCsv('catala');
jsonToCsv('english');
jsonToCsv('espanol');

// Comandos a usar para ejecutar convertir de JSON a CSV: 
// 1. node src/translation/CsvToJsonConverter_csv.js <-- Hace la preparación de los archivos JSON para poder ser convertidos a CSV
// 2. node src/translation/JsonToCsvConverter.js <-- Convierte el JSON a CSV 
// 3. node src/translation/CsvToJsonConverter_i18n.js <-- Vuelve al estado original de los JSON para que i18n siga funcionando

// ESTO SE TENDRIA QUE REALIZARSE DENTRO DE UNA FUNCIÓN ASYNC PARA QUE VAYA COMPLETANDO FUNCIONES Y SOLO TENER QUE HACER UN ÚNICO USO DEL COMANDO DEL PROPIO ARCHIVO (node src/translation/JsonToCsvConverter.js )