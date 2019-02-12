var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "eli",
  password: "123Clark"
});

console.log(con)

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
