require('dotenv/config')
const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const productsRouter = require('./routers/products');
const categoriesRouter = require('./routers/categories');
const plantsRouter = require('./routers/plants');

const api = process.env.API_URL;

app.use(cors());
app.options('*', cors());
// Middleware
app.use(express.json());
app.use(morgan('tiny'));

// Routers
// app.use(`${api}/products`, productsRouter);
app.use(`${api}/categories`, categoriesRouter);
app.use(`${api}/plants`, plantsRouter);

mongoose.connect(process.env.MONGODB_CONNECTION)
.then(()=>{
    console.log('Database Connection Ready...')
})
.catch((err) => {
    console.log(err);
})

app.listen(3000, () => {
    console.log('Server is running http://localhost:3000');
})