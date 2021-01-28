// initialize Express in project
const express = require('express');
const router = express.Router();
const app = express();
const cors = require('cors');

const carts = require('../data/cart.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


app.use(cors());
app.use(express.json());

router
.get('/', (req, res) => {
    return res.send(carts);
    })


.post('/', (req, res) => {

let upload = {
    uniqueID: uuidv4(),
    id: req.body.id,
    productName: req.body.productName,
    productImage: req.body.productImage,
    productPrice: req.body.productPrice,
    description: req.body.description,
    category: req.body.category,
    quantity:req.body.quantity,
    };

    carts.push(upload);

    fs.readFile("./data/cart.json", function (err, data) {
        let json = JSON.parse(data);
        json.push(upload);    
        fs.writeFile("./data/cart.json", JSON.stringify(json), function(err){
        if (err);
        console.log('The "data to append" was appended to file!');
        });
    })

return res.status(201).send(upload);})

router
.get('/:uniqueID', (req, res) => {
    let uniqueID = carts.find((cart)=> cart.uniqueID == req.params.uniqueID);
    return res.send(uniqueID);
    })
    
    .delete('/:uniqueID', (req, res) => {
        for (let i = 0; i < carts.length; i++){
        let currentCart = carts[i];
    
        let newCart = carts.filter((cart)=> cart.uniqueID !== req.params.uniqueID)
    
            if (currentCart.uniqueID == req.params.uniqueID){
    
            fs.writeFile('./data/cart.json', JSON.stringify(newCart), (err) => {if (err){
                console.log(err)
            }})
    
            return res.send(req.params.uniqueID + ' ' + 'is deleted')
            }
        }
    })

module.exports = router;