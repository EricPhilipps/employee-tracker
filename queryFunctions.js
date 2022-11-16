const db = require('./db/connection');
const inquirer = require('inquirer');
const cTable = require('console.table');

function allDepts() {
    db.query('SELECT * FROM department', function (err, results) {
        console.table(results);
    });
}

function allRoles() {
    db.query('SELECT * FROM job', function (err, results) {
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

async function addRole() {
    // Was trying to use count and for loop to make an array of department names, 
    // but couldn't figure out how to do it
    // const depts = [];
    // console.log(db.query(`SELECT COUNT(*) AS numberOfDepts FROM department`));

    // const deptLength = db.query()

    // for (let i = 0; i < deptLength; i++) {
    //     depts[i] = db.query(`SELECT name, id FROM department`)
    // }
    await inquirer.prompt([
        {
            type: "input",
            name: "roleName",
            message: "What is the name of the Role you would like to add?"
        },
        {
            type: "input",
            name: "roleSalary",
            message: "What is the Salary of the Role you would like to add?"
        },
        {
            type: "input",
            name: "roleDept",
            message: "What Department is this Role in?"
        }
    ])
        .then((userRole) => {
            db.query(`INSERT INTO job SET ?`,
                {
                    title: userRole.roleName,
                    salary: userRole.roleSalary,
                    department_id: 1
                }, 
                function (err, results) {
                if (err) throw err;
                console.log(`${userRole.roleName} added to roles`);
        });
    })
}

async function addEmp() {
    // const depts = [];
    // console.log(db.query(`SELECT COUNT(*) AS numberOfDepts FROM department`));

    // const deptLength = db.query()

    // for (let i = 0; i < deptLength; i++) {
    //     depts[i] = db.query(`SELECT name, id FROM department`)
    // }
    await inquirer.prompt([
        {
            type: "input",
            name: "firstName",
            message: "What is the first name of the Employee?"
        },
        {
            type: "input",
            name: "lastName",
            message: "What is the last name of the Employee?"
        },
        {
            type: "input",
            name: "roleDept",
            message: "What Role does this Employee have?"
        },
        {
            type: "input",
            name: "roleDept",
            message: "Who is this Employee's manager?"
        }
    ])
        .then((userEmp) => {
            db.query(`INSERT INTO employee SET ?`,
                {
                    first_name: userEmp.firstName,
                    last_name: userEmp.lastName,
                    role_id: 1,
                    manager_id: 1
                }, 
                function (err, results) {
                if (err) throw err;
                console.log(`${userEmp.firstName} ${userEmp.lastName} added to employees`);
        });
    })
}

module.exports = {
    allDepts,
    allRoles,
    allEmp,
    addDept,
    addRole,
    addEmp
}