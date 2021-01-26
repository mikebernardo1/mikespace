// initialize Express in project
const express = require('express');
const app = express();
const cors = require('cors');
const cart = require('./cart.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

app.use(cors());
app.use(express.json());

app
.get('/shoppingcart', (req, res) => {
    return res.send(cart);
    })

.post('/shoppingcart', (req, res) => {

let upload = {
    id: uuidv4(),
    productName: req.body.productName,
    productImage: req.body.productImage,
    productPrice: req.body.productPrice,
    description: req.body.description,
    category: req.body.category,
    quantity:req.body.quantity,
    };

    cart.push(upload);

    fs.readFile("cart.json", function (err, data) {
        let json = JSON.parse(data);
        json.push(upload);    
        fs.writeFile("cart.json", JSON.stringify(json), function(err){
        if (err);
        console.log('The "data to append" was appended to file!');
        });
    })

return res.status(201).send(upload);});

// start Express on port 8080
app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
    });