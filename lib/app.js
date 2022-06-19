const db = require("../db/connection");
const cTable = require('console.table');
const inquirer = require("inquirer");

// inquirer prompts
const startInquirer = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "tasks",
            message: "How Would You Like To Use Employee Tracker?",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees"
            ]
        }
    ])
    .then(answers => {
        const prompt = answers.task;
        if (prompt === "View all departments") {
            viewDepartments();
        };
    
        if (prompt === "View all roles") {
            viewRoles();
        };
    
        if (prompt === "View all employees") {
            viewEmployees();
        };
    })
}
const viewDepartments = () => {
    const sql = `SELECT * FROM departments`;
    db.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }
        console.log("\n");
        console.table(rows);
        return startInquirer();
    });
};

const viewRoles = () => {
    const sql = `SELECT roles.id, 
                        roles.title, 
                        roles.salary, 
                        departments.name AS department
                    FROM roles
                    LEFT JOIN departments ON roles.department_id = departments.id`;
    db.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }
        console.log("\n");
        console.table(rows);
        return startInquirer();
    });
};

const viewEmployees = () => {
    const sql = `SELECT employees.id, 
                        employees.first_name, 
                        employees.last_name,
                        roles.title AS title,
                        roles.salary AS salary,
                        departments.name AS department,
                        CONCAT (manager.first_name, " ", manager.last_name) AS manager 
                FROM employees
                LEFT JOIN roles ON employees.role_id = roles.id
                LEFT JOIN departments ON roles.department_id = departments.id
                LEFT JOIN employees manager ON employees.manager_id = manager.id`;
    db.query(sql, (err, rows) => {
        if (err) {
            throw err;
        }
        console.log("\n");
        console.table(rows);
        return startInquirer();
    });
};

module.exports = startInquirer;