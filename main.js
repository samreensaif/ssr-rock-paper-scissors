#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgCyan.bold(`\n\t\t^^^^^^^^^^^^^^^^^^^^^^^^^^^^`));
console.log(chalk.bgCyan.bold.underline(`\t\tSSR-ROCK-PAPER-SCISSORS-GAME`));
console.log(chalk.bgCyan.bold(`\t\t^^^^^^^^^^^^^^^^^^^^^^^^^^^^`));
let ask = await inquirer.prompt([
    {
        name: "person1",
        type: "input",
        message: "\nEnter player1 name:"
    },
    {
        name: "person2",
        type: "input",
        message: "\nEnter player2 name:"
    }
]);
console.log(chalk.greenBright(`\n\t\tIT's TIME TO START THE GAME\n\n`));
let condition = true;
while (condition) {
    let options = await inquirer.prompt([
        {
            name: "optionPlayer1",
            type: "list",
            message: `\nEnter your choice ${ask.person1}`,
            choices: ["Rock", "Paper", "Scissors"]
        },
        {
            name: "optionPlayer2",
            type: "list",
            message: `\nEnter your choice ${ask.person2}`,
            choices: ["Rock", "Paper", "Scissors"]
        }
    ]);
    if (options.optionPlayer1 === options.optionPlayer2) {
        console.log(chalk.redBright(`\n\n\t\tITs A TIE`));
    }
    else if (options.optionPlayer1 === "Rock" && options.optionPlayer2 === "Scissors" ||
        options.optionPlayer1 === "Scissors" && options.optionPlayer2 === "Paper" ||
        options.optionPlayer1 === "Paper" && options.optionPlayer2 === "Rock") {
        console.log(chalk.greenBright(`\n\n\t\tPLAYER1: ${ask.person1} Won The Match`));
    }
    else {
        console.log(chalk.greenBright(`\n\n\t\tPLAYER2: ${ask.person2} Won The Match`));
    }
    let wantToContinue = await inquirer.prompt({
        name: "continue",
        type: "list",
        message: "Do You Want To Continue:",
        choices: ["yes", "no"]
    });
    wantToContinue.continue === "yes" ? (condition = true) : (condition = false);
}
console.log(chalk.bgCyan.bold(`\n\t\t^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`));
console.log(chalk.bgCyan.bold(`\t\tTHANKS FOR USING SSR-ROCK-PAPER-SCISSORS-GAME`));
console.log(chalk.bgCyan.bold(`\t\t^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^`));
