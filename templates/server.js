const express = require('express');
const app = express();

const sampleRoute = require('./routes/sampleRoute');
app.use('/api', sampleRoute);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
