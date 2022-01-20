// Create express app
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());   // enable Cross-Origin Resource Sharing.

const db = require("./database.js")

// Server port
const port = process.env.PORT || 4000;   // define a port number in which our app needs to be started.

app.listen(port, function() {
    console.log(`Running on ${port}`);
});

// app.get("/", (req, res, next) => {
//     res.json({message: 'OK'})
// })

// Root endpoint
app.get("/", (req, res, next) => {
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

// Default response for any other request
app.use(function(req, res){
    res.status(404);
});

module.exports = app;