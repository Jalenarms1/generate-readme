const tab = require("./readmeTemp.js")
const fs = require("fs");
const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            name: "title",
            message: "What do you want your title to be?",
            validate: (title) => {
                if(title.trim() === ""){
                    return "No entry found. Try again."
                }
                return true 
            }
        },
        {
            name: "description",
            message: "Give a good description for your README.",
            validate: description => {
                if(description.trim() === ""){
                    return "No entry found. Try again."
                }
                return true
            }
        },
        {
            name: "installation",
            message: "How do you go about installing your program?",
            validate: installation => {
                if(installation.trim() === ""){
                    return "No entry found. Try again."
                }
                return true 
            }
        },
        {
            name: "usage",
            message:"Please give details on the usage of your application?",
            validate: usage => {
                if(usage.trim() === ""){
                    return "No entry found. Try again."
                }
                return true
            }
        },
        {
            name: "contribution",
            message: "What are the contribution guidelines for your application?",
            validate: contribution => {
                if(contribution.trim() === ""){
                    return "No entry found. Try again."
                }
                return true
            }
        },
        {
            name: "testing",
            message: "How can one test out your application?",
            validate: testing => {
                if(testing.trim() === ""){
                    return "No entry found. Try again."
                }
                return true
            }
        },
        {
            type: "list",
            name: "liscence",
            message: "Choose the liscence for your project?",
            choices: ["MIT", "Apache", "GPL"],
        },
        {
            name: "github",
            message: "What is your GitHub username?",
            validate: github => {
                if(github.trim() === ""){
                    return "No entry found. Try again."
                }
                return true
            }
        },
        {
            name: "email",
            message: "What is your email?",
            validate: email => {
                if(email.trim() === ""){
                    return "No Entry found. Try again."
                }
                return true
            }

        }

    ])
    .then(response => {
        console.log(response)

        fs.writeFile("README.md", tab.generateREADME(response), (err) => {
            err ? console.log(err) : console.log("success");
        })
    })