const csvtojson = require('csvtojson');

const csvfilepath = '../files_csv/catala.csv'

csvtojson().fromFile(csvfilepath).then((json) => {console.log(json)})