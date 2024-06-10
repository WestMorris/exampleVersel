require('dotenv').config();
require('./config/mongoose.config');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/product.routes')(app);

app.listen(process.env.PORT, () => {
    console.log("lISTO")
});
