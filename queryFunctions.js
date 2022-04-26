const db = require('./db/connection')
function allDepts() {
    db.query('SELECT * FROM department', function (err, results) {
        console.log(results);
    });
}

function allRoles() {
    db.query('SELECT * FROM jobs', function (err, results) {
        console.log(results);
    });
}

function allEmp() {
    db.query('SELECT * FROM employee', function (err, results) {
        console.log(results);
    });
}

module.exports = {
    allDepts,
    allRoles,
    allEmp,
}