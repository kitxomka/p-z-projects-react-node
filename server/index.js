// Create express app
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());   // enable Cross-Origin Resource Sharing.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const db = require("./database.js")
let comment = {};

// Server port
const port = process.env.PORT || 4000;   // define a port number in which our app needs to be started.

app.listen(port, function() {
    console.log(`Running on ${port}`);
});


// get data
app.get("/", (req, res) => {
    const sql = "SELECT * FROM TableData";
    const params = [];
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
    }); 
})

// post data
app.post('/', (req, res) => {
    let newComment = {
        CreatorName: req.body.creatorName,
        Comment: req.body.comment,
        Date: req.body.date
    };
    comment = newComment;
    console.log(comment)

    db.run(`CREATE TABLE IF NOT EXISTS Comments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        creator_name text, 
        date text,  
        comment text
        )`,
    (err) => {
        if (err) {
            // Table already created
          console.log('The table exists');
        }else{
            // Table just created, creating some rows
          let insert = 'INSERT INTO Comments (creator_name, date, comment) VALUES (?,?,?)'
          db.run(insert, [comment.CreatorName, comment.Date, comment.Comment])
        }
    });
                   
});

// Default response for any other request
app.use(function(req, res){
    res.status(404);
});

module.exports = app;