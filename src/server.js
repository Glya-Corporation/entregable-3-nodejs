const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 1811;

app.listen(PORT, () => console.log(`http://127.0.0.1:${PORT}`));

