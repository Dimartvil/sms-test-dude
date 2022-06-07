require('dotenv').config();
const app = require('./server');
require('./database');

app.listen(app.get('port'), () => {
  console.log("Hello from", app.get('port'));
})