const sqlite3 = require('sqlite3').verbose();

// const db = new sqlite3.Database("../DB/database.db");
const DBSOURCE  = "../DB/database.db";

let sql = `SELECT * FROM TableData`;

const db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message)
        throw err
      }else{
          console.log('Connected to the SQLite database.')
          db.all(sql, [], (err, rows) => {
            if (err) {
                console.log('error');
            }
            rows.forEach((row) => {
              console.log(row.id + "\t" + row.price + "\t" + row.quantity);
            });
          }); 
      }
});


module.exports = db;