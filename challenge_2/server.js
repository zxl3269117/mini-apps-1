const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static('client'));
app.use(bodyParser.raw({type: 'multipart/form-data'}));

app.post('/convert', (req, res) => {

  // clean up the json file
  var filestr = String(req.body);
  var cleaning = filestr.slice(filestr.indexOf('{'));
  var body = cleaning.slice(0, cleaning.indexOf('--'));
  var json = JSON.parse(body);

  // convert jsonFile to csv
  var csv = csvMaker(json);
  res.status(201).send(template(csv));
})

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
})

/************************************************************/
/*>>>>> UTILITY FUNCTIONS <<<<<<*/
/************************************************************/

// Templating of response body
var template = (csv) => {
  return `<!DOCTYPE html>
  <html>
    <head>
      <title>
        CSV Report Generator
      </title>
    </head>

    <body>
      <h1>CSV Report Generator</h1>
      <form action="/convert" method="post" enctype="multipart/form-data" id="form">
        <p for="json">Upload the JSON file you want to covert to CSV:</p>
        <input type="file" name="file" accept=".json">
        <input type="submit" value="Convert!">
      </form>

      <div id="csv">${csv}</div>
    </body>
  </html>`
}

// Convert JSON to CSV
var csvMaker = (json) => {

  var convertedArr = [];

  // Get all keys of the json as the columns of the csv report
  var columns = Object.keys(json);
  columns.pop(); // take out children as the column
  convertedArr.push(columns);

  // Parse all nodes in json
  var nodeParser = (node) => {
    var row = [];
    for (var key in node) {
      // do not add value from the children property
      if (key === 'children') {
        break;
      }
      // when node has property that the columns do not have, add the key to columns
      if (!columns.includes(key)) {
        convertedArr[0].push(key);
      }
      // node has matching value to columns, add it in, otherwise, add null
      if (node[key]) {
        row.push(node[key]);
      } else {
        row.push(null);
      }
    }
    // add row into the convertedArr
    convertedArr.push(row);

    // BASE CASE
    if (node.children.length === 0) {
      return;
    }

    // RECURSIVE CASE
    node.children.forEach((childNode) => {
      nodeParser(childNode);
    });
  }

  nodeParser(json);

  var csvStr = '';
  convertedArr.forEach((row) => {
    // join the row array with ',' and wrap it with <p> element
    var rowStr = '<p>';
    rowStr += row.join(', ');
    rowStr += '</p>';
    csvStr += rowStr;
  })
  return csvStr;
}