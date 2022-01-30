// Create express app
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());   // enable Cross-Origin Resource Sharing.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const sqlite3 = require('sqlite3').verbose();

// DB path
const DBSOURCE  = "../DB/database.db";
let user = {};
let products = [];

/**
 * @returns uuid
 */
const uuid = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

// Server port
const port = process.env.PORT || 4000;   // define a port number in which our app will be started.

 
app.listen(port, function() {
    console.log(`Running on ${port}`);
});

// Connecting to databese and run initDB on success
const db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
      } else {
        console.log('Connected to the SQLite database.')
        initDb();
      }    
});

/**
 * Creating "Users" and "UsersProducts" tables in DB (if not exist)
 */
const initDb = async () => {
    await db.run(`CREATE TABLE IF NOT EXISTS Users ( id text PRIMARY KEY UNIQUE, creator_name text, date text, comment text );`,
        (err) => {
            if (err) {
                console.log('Error creating table "Users": ', err);
            }else{
                console.log('"Users" table created successfully: ');
            }
        }
    );

    await db.run(`CREATE TABLE IF NOT EXISTS UsersProducts ( id INTEGER PRIMARY KEY AUTOINCREMENT, user_id string, price INTEGER, quantity INTEGER );`,
        (err) => {
            if (err) {
                console.log('Error creating table "UsersProducts": ', err);
            }else{
                console.log('"UsersProducts" table created successfully: ');
            }
        }
    );
};

/**
 * on '/insert-data' query, save client form data to 'Users' and 'UsersProducts' tables.
 * 
 */
app.post('/insert-data', async (req, res) => {
    console.log('/insert-data call');
    console.log('>>>>>>>>>>> req.body: ', req.body);
    const userUuid = uuid();
    try {
        console.log('adding user...');
        await db.run('INSERT INTO Users (id, creator_name, date, comment) VALUES (?,?,?,?);', [userUuid, req.body.creatorName, req.body.comment, req.body.date]);
    } catch(err) {
        console.log('Error insert User: ', err);
        res.json({ "MESSAGE": "ERROR", "ERROR": err });
    }
    try {
        console.log('adding products...');
        let query = `INSERT INTO UsersProducts(user_id, price, quantity) VALUES `;
        let values = [];
        for(let i = 0; i < req.body.products.length; i++) {
            const product = req.body.products[i];
            query += ` (?,?,?),`;
            values.push(userUuid);
            values.push(product.price);
            values.push(product.quantity);
        }
        query = query.slice(0, -1) + ';';
        console.log('>>>>>>> query', query);
        console.log('>>>>>>> values', values);
        await db.run(query, values);
    } catch(err) {
        console.log('Error insert UserProduct: ', err);
        res.json({ "MESSAGE": "ERROR", "ERROR": err });
    }

    res.json({ "MESSAGE": "OK" });

});


// Default response for any other request
app.use(function(req, res){
    res.status(404);
});
 

module.exports = app;