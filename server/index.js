// initialize Express in project
const express = require('express');
const app = express();
const cors = require('cors');
const cart = require('./data/cart.json');
const comments = require('./data/comments.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');

app.use(cors());
app.use(express.json());

app
.get('/shoppingcart', (req, res) => {
    return res.send(cart);
    })

.post('/shoppingcart', (req, res) => {

let upload = {
    cartID: uuidv4(),
    productID:req.body.productID,
    productName: req.body.productName,
    productImage: req.body.productImage,
    productPrice: req.body.productPrice,
    description: req.body.description,
    category: req.body.category,
    quantity:req.body.quantity,
    };

    cart.push(upload);

    fs.readFile("./data/cart.json", function (err, data) {
        let json = JSON.parse(data);
        json.push(upload);    
        fs.writeFile("./data/cart.json", JSON.stringify(json), function(err){
        if (err);
        console.log('The "data to append" was appended to file!');
        });
    })

return res.status(201).send(upload);});

app
.get('/comments', (req, res) => {
    return res.send(comments);
    })

.post('/comments', (req, res) => {

let upload = {
    id: uuidv4(),
    subject: req.body.subject,
    email: req.body.email,
    comments: req.body.comments
    };

    comments.push(upload);

    fs.readFile("./data/comments.json", function (err, data) {
        let json = JSON.parse(data);
        json.push(upload);    
        fs.writeFile("./data/comments.json", JSON.stringify(json), function(err){
        if (err);
        console.log('The "data to append" was appended to file!');
        });
    })

return res.status(201).send(upload);})

.get('/comments/:id', (req, res) => {
    let commentsID = comments.find((comment)=> comment.id == req.params.id);
    return res.send(commentsID);
    })

.delete('/comments/:id', (req, res) => {
    for (let i = 0; i < comments.length; i++){
    let currentComments = comments[i];

    let newComments = comments.filter((comment)=> comment.id !== req.params.id)

        if (currentComments.id == req.params.id){

        fs.writeFile('./data/comments.json', JSON.stringify(newComments), (err) => {if (err){
            console.log(err)
        }})

        return res.send(req.params.id + ' ' + 'is deleted')
        }
    }
})

// start Express on port 8080
app.listen(8080, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
    })