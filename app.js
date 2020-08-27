const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamArray = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function first() {
  const questions = inquirer.prompt([
      {
        type: "list",
        choices: ["Manager", "Engineer", "Intern"],
        message: "What is your role?",
        name: "role",
      },
    ])
    .then(function (data) {
      if (data.role === "Manager") {
        managerInfo();
      } else if (data.role === "Engineer") {
        engineerInfo();
      } else if (data.role === "Intern") {
        internInfo();
      }
    });
}

function managerInfo() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is your name?",
          name: "name",
        },

        {
          type: "input",
          message: "What is your id?",
          name: "id",
        },

        {
          type: "input",
          message: "What is your email address?",
          name: "email",
        },

        {
          type: "input",
          message: "What is your office phone number?",
          name: "officeNumber",
        },

        {
          type: "list",
          choices: ["Yes", "No"],
          message: "Would you like to add another team member?",
          name: "continue",
        },
      ])
      .then(function (data) {
        const employee = new Manager(data.name, data.id, data.email, data.officeNumber)
        teamArray.push(employee);

        console.log(teamArray)
        if (data.continue === "Yes") {
          first();
        } else if (data.continue === "No") {
          fs.writeFile("./output/team.html", render(teamArray), (err) => { 
              if (err) 
                console.log(err); 
              else { 
                console.log("File written successfully\n");
              }
        }
      
        )}
      })
  }

  function engineerInfo() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is your name?",
          name: "name",
        },

        {
          type: "input",
          message: "What is your id?",
          name: "id",
        },

        {
          type: "input",
          message: "What is your email address?",
          name: "email",
        },

        {
          type: "input",
          message: "What is your Git Hub user name?",
          name: "github",
        },

        {
          type: "list",
          choices: ["Yes", "No"],
          message: "Would you like to add another team member?",
          name: "continue",
        },
      ])
      .then(function (data) {
        const employee = new Engineer (data.name, data.id, data.email, data.github )
        teamArray.push(employee);

        console.log(teamArray)

        if (data.continue === "Yes") {
          first();
        } else if (data.continue === "No") {
          fs.writeFile("./output/team.html", render(teamArray), (err) => { 
              if (err) 
                console.log(err); 
              else { 
                console.log("File written successfully\n");
              }
        }
      
        )}
      })
  };

  function internInfo() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is your name?",
          name: "name",
        },

        {
          type: "input",
          message: "What is your id?",
          name: "id",
        },

        {
          type: "input",
          message: "What is your email address?",
          name: "email",
        },

        {
          type: "input",
          message: "What school do you attend?",
          name: "school",
        },

        {
          type: "list",
          choices: ["Yes", "No"],
          message: "Would you like to add another team member?",
          name: "continue"
        }
      
      ])
      .then(function (data) {
       
        const employee = new Intern (data.name, data.id, data.email, data.school)
            teamArray.push(employee);
    
            console.log(teamArray)
    
        

        if (data.continue === "Yes") {
          first();
        } else if (data.continue === "No") {
          fs.writeFile("./output/team.html", render(teamArray), (err) => { 
              if (err) 
                console.log(err); 
              else { 
                console.log("File written successfully\n");
              }
        }
      
        )}
  })
  };

      

first()
