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
          name: "role"
        }
     
            
]).then(function(data){

    if(data.role === "Manager") {
         managerInfo()
    }else if(data.role === "Engineer") {
        engineerInfo() 
    }else if(data.role === "Intern") {
        internInfo()
    }
})


function managerInfo() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
          },
    
          {
            type: "input",
            message: "What is your id?",
            name: "id"
          },
    
        {
          type: "input",
          message: "What is your email address?",
          name: "email"
        },
    
        {
            type: "input",
            message: "What is your office phone number?",
            name: "officeNumber"
          },

          {
            type: "list",
            choices: ["Yes", "No"],
            message: "Would you like to add another team member?",
            name: "continue"
        }
    
        ]).then(function(data) {
            teamArray.push({
                "Name": data.name,
                "Role": "Manager",
                "Email": data.email,
                "ID": data.id,
                "office number": data.officeNumber
            })
                      
            if (data.continue === "Yes") {
                first()
            }else if(data.continue === "No") {
                return
            }

        });

       
    };
    
    function engineerInfo() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
          },
    
          {
            type: "input",
            message: "What is your id?",
            name: "id"
          },
    
        {
          type: "input",
          message: "What is your email address?",
          name: "email"
        },
    
        
    { 
       type: "input",
       message: "What is your Git Hub user name?",
       name: "github"
    },

    {
        type: "list",
        choices: ["Yes", "No"],
        message: "Would you like to add another team member?",
        name: "continue"
    }
    
    
    ]) .then(function(data){
        
        teamArray.push({
            "Name": data.name,
            "Role": "Engineer",
            "Email": data.email,
            "ID": data.id,
            "GitHub": data.github
        })
                     
        if(data.continue === "Yes") {
             first()
        }else if(data.continue === "No") {
            return
        }
    });
};


    function internInfo() {
        inquirer.prompt([

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
                name: "school"
            },

            {
                type: "list",
                choices: ["Yes", "No"],
                message: "Would you like to add another team member?",
                name: "continue"
            }

        ]).then(function(data){
            
            teamArray.push({
                "Name": data.name,
                "Role": "Intern",
                "Email": data.email,
                "ID": data.id,
                "School": data.school
            })
            
                        
            if(data.continue === "Yes") {
                 first()
            }else if(data.continue === "No") {
               return
            }
        });   
    

    };

        
};

first();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

 render(teamArray);
   
console.log(render(teamArray));
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
