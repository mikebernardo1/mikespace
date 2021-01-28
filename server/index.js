// initialize Express in project
const express = require('express');
const app = express();
const cors = require('cors');
const Stripe = require('stripe');

app.use(cors());
app.use(express.json());

const shoppingcartRoute = require('./routes/shoppingcartRoute');
const commentsRoute = require('./routes/commentsRoute');
const stripe = Stripe(process.env.STRIPE_APP_API_KEY);

app.use('/shoppingcart', shoppingcartRoute);
app.use('/comments', commentsRoute);

// start Express on port 8080
app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
    })