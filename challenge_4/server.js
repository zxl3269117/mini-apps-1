const express = require('express');
const app = express();
const PORT = 7070;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// REQUESTS HANDLER
app.get('/', (req, res) => {
  // do something
});

app.listen(PORT, () => {
  console.log(`listen on port ${PORT}`);
})