const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

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
      <form action="/json_file" method="post" enctype="application/json" id="form">
        <p for="json">Enter the JSON data you want to covert to CSV:</p>
        <textarea name="file" rows="10" cols="50"></textarea>
        <input type="submit" value="Convert!">
      </form>

      <p>${csv}</p>
    </body>
  </html>`
}

// Convert JSON to CSV
var csvMaker = (json) => {
  // still battling between create the csv string on the go or after parse json.



  var convertedObj = {};
  var depth = 0;

  var nodeParser = (node, depth) => {
    // if at the root of the tree, convert all key names to column names
    if (depth === 0) {
     var keys = Object.keys(json);
     keys.pop();
     convertedObj.depth = keys;
    }

    // BASE CASE

    // RECURSIVE CASE
    // iterate through through the json
      // if there is new column name
        // push it to the column name array

      // create a ROW array with values in each object, if an object does not have a value for a column,
         // skip with a null as position holder
      // after creation of each ROW array push the array to the csvArray

  }

  // once recursion completed, conver the obj to a string
  // iterate through obj
    //
}

app.use(express.static('client'));
app.use(bodyParser.urlencoded());

app.post('/json_file', (req, res) => {
  // console.log('heard');
  // console.log(req.body);
  var body = req.body.file.replace('\r\n', '').replace(';', '');
  var json = JSON.parse(body);
  // console.log(jsonFile);

  // convert jsonFile to csv
  var csv = csvMaker(json);

  // compose the response to client
  res.status(201).send(template(csv)) // csv has to be in string format?
  res.end('end')
})

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
})