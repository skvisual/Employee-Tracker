var mysql = require('mysql')
var inquirer = require('inquirer')
var console = require('console.table')

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "0177",
    database: "cms_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  createDepartment();
});


function createDepartment() {
  console.log('Creating new department')

  var query = connection.query(
    'INSERT INTO department SET ? WHERE ?',
    function(err) {if (err) throw err;}
  );

function createRole(){
  console.log('Creating a new role');
  var query = connection.query(
    'UPDATE role SET ? WHERE ?'
  )
}

function createEmployee(){
  console.log('Creating a new employee');
  var query = connection.query(
    'UPDATE employee SET ? WHERE ?'
  )
}

function readDepartment(){
  
}
  