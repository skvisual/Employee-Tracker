-- DROP DATABASE IF EXISTS cms_db;
CREATE DATABASE cms_db;

USE cms_db;

CREATE TABLE department (
  id INTEGER(10) NOT NULL,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INTEGER(10) NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(6,0) NOT NULL,
  department_id INTEGER(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INTEGER(10) AUTO_INCREMENT NOT NULL,
  firstName VARCHAR(30) NOT NULL,
  lastName VARCHAR(30) NOT NULL,
  roleId INTEGER(30) NOT NULL,
  managerId INTEGER(30),
  PRIMARY KEY (id)
);

-- -- STARTING INFO FOR DEPARTMENT
-- INSERT INTO department (id, name)
-- VALUES (1, 'Finance'),(2, 'Executive'),(3, 'IT'),(4, 'Admin');

-- -- STARTING INFOR FOR ROLES
-- INSERT INTO role (id, title, salary, department_id)
-- VALUES (1, 'Accountant', 75000, 1),(2, 'Payroll Admin', 60000, 4),(3, 'Data Engineer', 70000, 3),(4, 'Executive Director', 2);


-- -- STARTING INFO FOR EMPLOYEES
-- INSERT INTO employee (firstName, lastName, roleId, managerId)
-- VALUES ('Andrew', 'Appleseed', 1, 100), ('Barry', 'White', 4, 200), ('Charlie', 'Chaplin', 3, 300), ('Joe', 'Exotic', 2, null);



