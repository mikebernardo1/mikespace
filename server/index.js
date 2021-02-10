// initialize Express in project
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const shoppingcartRoute = require('./routes/shoppingcartRoute');
const commentsRoute = require('./routes/commentsRoute');

const PORT = process.env.PORT || 5000;

app.use('/shoppingcart', shoppingcartRoute);
app.use('/comments', commentsRoute);

// start Express on port 8080
app.listen(PORT, () => {
    console.log(`Server Started on ${PORT}`);
    console.log('Press CTRL + C to stop server');
    })