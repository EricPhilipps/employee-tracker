const express = require('express');
const inquirer = require('inquirer');
require('dotenv').config();
const { allDepts } = require('./queryFunctions');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const opt = ["View all Departments", "View all Roles", "View all Employees"];

function startApp() {
    inquirer.prompt([
        {
            type: "list",
            name: "userview",
            message: "What you want to see?",
            choices: opt
        }
    ])
        .then((ans) => {
            console.log(ans);
            switch (ans.userview) {
                case opt[0]:
                    // queryFunctions.allDepts();
                    allDepts();
                    break;

                default:
                    break;
            }
        })
    }

startApp();

