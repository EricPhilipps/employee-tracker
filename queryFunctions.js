const db = require('./db/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');

function allDepts() {
    db.query('SELECT * FROM department', function (err, results) {
        console.table(results);
    });
}

function allRoles() {
    db.query('SELECT * FROM jobs', function (err, results) {
        console.table(results);
    });
}

function allEmp() {
    db.query('SELECT * FROM employee', function (err, results) {
        console.table(results);
    });
}

async function addDept() {
    await inquirer.prompt([
        {
            type: "input",
            name: "deptName",
            message: "What Department would you like to add?"
        }
    ])
        .then((userDept) => {
            db.query(`INSERT INTO department (department_name) VALUES (?)`, userDept.deptName, function (err, results) {
                if (err) throw err;
                console.log(`${userDept.deptName} added to departments`);
        });
    })
}


module.exports = {
    allDepts,
    allRoles,
    allEmp,
    addDept,
    // addRole,
    // addEmp
}