
const inquirer = require('inquirer');
require('dotenv').config();
const queryFunctions = require('./queryFunctions');

const opt = ["View all Departments", 
            "View all Roles", 
            "View all Employees",
            ""
];

function startApp() {
    inquirer.prompt([
        {
            type: "list",
            name: "userview",
            message: "What would you like to do?",
            choices: opt
        }
    ])
        .then((ans) => {
            console.log(ans);
            switch (ans.userview) {
                case opt[0]:
                    queryFunctions.allDepts();
                    break;
                case opt[1]:
                    queryFunctions.allRoles();
                    break;
                case opt[2]:
                    queryFunctions.allEmp();
                    break;

                default:
                    break;
            }
            startApp();
        })
    }

startApp();

