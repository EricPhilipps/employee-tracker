
const inquirer = require('inquirer');
require('dotenv').config();
const queryFunctions = require('./queryFunctions');

const opt = ["View all Departments", 
            "View all Roles", 
            "View all Employees",
            "Add a Department",
            "Add a Role",
            "Add an Employee",
            // "Update an Employee",
            "Exit\n"
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
        .then(async (ans) => {
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
                case opt[3]:
                    await queryFunctions.addDept();
                    break;
                case opt[4]:
                    await queryFunctions.addRole();
                    break;
                case opt[5]:
                    await queryFunctions.addEmp();
                    break;
                // case opt[6]:
                //     queryFunctions.updateEmp();
                //     break;
                // case opt[7]:
                //     return;
                default:
                    break;
            }
            startApp();
        })
    }

startApp();

