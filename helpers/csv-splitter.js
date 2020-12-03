const csvSplitStream = require('csv-split-stream');
const fs = require('fs');

return csvSplitStream.split(
  fs.createReadStream('test.csv'),
  {
    lineLimit: 1
  },
  (index) => fs.createWriteStream(`test-${index}.csv`)
)
.then(csvSplitResponse => {
  console.log('csvSplitStream succeeded.', csvSplitResponse);
  // outputs: {
  //  totalChunks: 350,
  //  options: {
  //    delimiter: "\n",
  //    lineLimit: "10000"
  //  }
  // }
}).catch(csvSplitError => {
  console.log('csvSplitStream failed!', csvSplitError);
});