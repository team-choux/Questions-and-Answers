const CVSToJSON = require('csvtojson');
const fs = require('fs');
const path = require('path');

var csvFilePaths = ['answers.csv'/*, 'questions.csv', 'answers_photos.csv'*/];
//get list of all file paths.

const directoryPath = path.join(__dirname, 'test/');
fs.readdir(directoryPath, (err, files) => {
  if (err) {return console.log('Unable to scan directory:' + err); }
  console.log('files', files)
  files.forEach(csvPath => {

  console.log('path', directoryPath + csvPath);
    //convert each file path into json
    CVSToJSON().fromFile(directoryPath + csvPath)
      .then(csvFile => {
        fs.writeFile(`./json/${csvPath}.json`, JSON.stringify(csvFile), (err) => {
          if (err) {
            throw err;
          }
          console.log(`${csvPath} converted to JSON`);
        });
      }).catch(err => { console.log (err);
      });
  });
})





