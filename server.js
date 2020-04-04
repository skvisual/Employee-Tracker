var mysql = require('mysql')
var inquirer = require('inquirer')
var console = require('console.table')

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: process.env.PORT || 3306,

    // Your username
    user: "root",

    // Your password
    password: "0177",
    database: "cms_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  start();
});

function start(){

  const questions = [
    {
      type: 'list',
      message: 'What would you like to do?',
      choices: 
      [
        'View Department',
        'View Roles',
        'View Employees',
        'Add Department',
        'Add Role',
        'Add Employee',
        'Update Employee',
        'EXIT',
      ],
      name: 'task'
    },
  ]
}

inquirer
.prompt(questions)
.then(function(answers){
  
  switch(answers.task){
    case 'View Department':
      viewDepartment();
    break
    case 'View Roles':
      viewRole();
    break
    case 'View Employees':
      viewEmployee();
    break
    case 'Add Department':
      addDepartment();
    break
    case 'Add Role':
      addRole();
    break
    case 'Add Employee':
      addEmployee();
    break
    case 'Update Employee':
      updateEmployee();
    break
    case 'EXIT':
      return 
  }
})

function addDepartment() {
  console.log('Creating new department')

  var query = connection.query(
    'INSERT INTO department SET ? WHERE ?',
    function(err) {if (err) throw err;
      console.log(response.affectedRows + 'department created \n')
    },
  )
  start();
}

function addRole(){
  console.log('Creating a new role');
  var query = connection.query(
    'INSERT INTO role SET ? WHERE ?',
    function(err) {if (err) throw err;
      console.log(response.affectedRows + 'role created \n')
    },
  )
  start();
}

function addEmployee(){
  console.log('Creating a new employee');
  var query = connection.query(
    'INSERT INTO employee SET ? WHERE ?',
    function(err) {if (err) throw err;
      console.log(response.affectedRows + 'Employee created \n')
    },
  )
  start();
}

function viewDepartment(){
  console.log('Selecting all departments \n');
  var query = connection.query(
    'SELECT * FROM department',
    function(err) {if (err) throw err;
      console.getTable(response)     
    },
  )
  start();
}

function viewRole(){
  console.log('Selecting all roles \n');
  var query = connection.query(
    'SELECT * FROM role',
    function(err) {if (err) throw err;
      console.getTable(response)
  })
  start();
}

function updateEmployee(){
  console.log('Updating employee info \n')
  var query = connection.query(
    'UPDATE employee SET ? WHERE ?',
    function(err) {if (err) throw err;
      console.getTable(response.affectedRows + 'Employee information updated \n')
  })
  start();
}

    
