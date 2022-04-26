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

module.exports = {
    allDepts,
    allRoles,
    allEmp,
}