var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "eli",
  password: "123Clark",
  database: "nodetest"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM test", function (err, result, fields) {
    if (err) throw err;
    console.log(result[0].title);
  });
});
