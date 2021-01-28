// initialize Express in project
const express = require('express');
const router = express.Router();
const app = express();
const cors = require('cors');

const comments = require('../data/comments.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


app.use(cors());
app.use(express.json());

router
.get('/', (req, res) => {
    return res.send(comments);
    })


.post('/', (req, res) => {

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

router
.get('/:id', (req, res) => {
    let commentsID = comments.find((comment)=> comment.id == req.params.id);
    return res.send(commentsID);
    })

.delete('/:id', (req, res) => {
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

module.exports = router;