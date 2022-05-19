const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static('client'));

app.post('/', (req, res) => {

})

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
})