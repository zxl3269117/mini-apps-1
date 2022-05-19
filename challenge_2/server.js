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
  res.status(201).send(template(csv))
  res.end('end')
})

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
})