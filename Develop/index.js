const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

const questions = [
	{
		type: "input",
		name: "title",
		message: "project title:",
		validate: validateNonEmpty,
	},
	{
		type: "input",
		name: "description",
		message: "project description:",
		validate: validateNonEmpty,
	},
	{
		type: "input",
		name: "badges",
		message: "project badges:",
		validate: validateNonEmpty,
	},
	{
		type: "editor",
		name: "installation",
		message: "installation steps:",
		validate: validateNonEmpty,
	},
	{
		type: "editor",
		name: "usage",
		message: "usage instructions:",
	},
	{
		type: "input",
		name: "license",
		message: "project license: (ISC)",
		default: "ISC",
	},
	{
		type: "editor",
		name: "contributing",
		message: "contributing instructions:",
	},
	{
		type: "editor",
		name: "tests",
		message: "project tests:",
	},
	{
		type: "input",
		name: "profile_picture",
		message: "profile picture url:",
	},
	{
		type: "input",
		name: "gh_email",
		message: "GitHub email:",
		validate: validateEmail,
	},
];

function validateNonEmpty(input) {
	if (!input || input === "") return "Invalid input";
	return true;
}

function validateEmail(input) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!input || !re.test(input)) return "Invalid email";
	return true;
}

function showInstructions() {
	console.log(
		"\n------------\n" +
			"This utility will walk you through creating a README.md file.\n" +
			"Some section will allow to enter complex markdown text using your default text editor.\n\n" +
			"Press ^C at any time to quit." +
			"\n------------\n"
	);
}

function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (error) => {
		if (error) console.log("Unable to save file due to error: " + error);
	});
}

function init() {
	showInstructions();
	inquirer.prompt(questions).then((data) => {
		writeToFile("README.md", generateMarkdown(data));
	});
}

init();
