const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3100;


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
