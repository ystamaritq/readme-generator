const inquirer = require("inquirer");

const questions = [
	{
		type: "input",
		name: "title",
		message: "What is your project title?",
	},
	{
		type: "input",
		name: "description",
		message: "What is the project description?",
	},
	{
		type: "input",
		name: "installation",
		message: "Which steps do you have to follow to install the project?",
	},
	{
		type: "input",
		name: "usage",
		message: "What is the usage of the project?",
	},
	{
		type: "input",
		name: "usage",
		message: "What is the usage of the project?",
	},
	{
		type: "input",
		name: "license",
		message: "What is the project license?",
	},
	{
		type: "input",
		name: "contribution",
		message: "What is the project contribution?",
	},
	{
		type: "input",
		name: "tests",
		message: "What is the project tests cases?",
	},
	{
		type: "list",
		name: "questions",
		choices: [
			"What is the your github profile picture?",
			"What is the your email?",
		],
	},
];

inquirer.prompt(questions).then((data) => {});

function writeToFile(fileName, data) {}

function init() {}

init();
