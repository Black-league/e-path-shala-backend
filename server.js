import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hey m page yh check so working</h1>');
});


app.get('/about', (req, res) => {
  res.send('<h1>Hey m page mmg</h1>');
});


app.listen(3000, () =>
  console.log('Example app listening on port 3000!'),
);
