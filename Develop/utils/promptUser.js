const inquirer = require("inquirer");

const questions = [
	{
		message: "Enter your GitHub username: ",
		name: "username",
	},
	{
		type: "input",
		name: "gh_email",
		message: "GitHub email:",
		validate: validateEmail,
	},
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
		message: "project badges: ",
		validate: validateNonEmpty,
	},
	{
		type: "confirm",
		name: "hasInstallationSection",
		message: "want to add Installation section?:",
		default: true,
	},
	{
		type: "editor",
		name: "installation",
		message: "installation steps:",
		validate: validateNonEmpty,
		when: (answers) => {
			return answers.hasInstallationSection;
		},
	},
	{
		type: "confirm",
		name: "hasUsageSection",
		message: "want to add Usage section?:",
		default: true,
	},
	{
		type: "editor",
		name: "usage",
		message: "usage instructions:",
		when: (answers) => {
			return answers.hasUsageSection;
		},
	},
	{
		type: "list",
		name: "license",
		message: "project license:",
		choices: [
			"MIT",
			"GNU LGPLv3",
			"mpl 2.0",
			"Apache License 2.0",
			"GNU AGPLv3",
			"GNU GPLv3",
			"Boost Software License",
			"Unlicense",
			"ISC",
		],
	},
	{
		type: "confirm",
		name: "hasContributionSection",
		message: "want to add contribution instructions section?:",
		default: true,
	},
	{
		type: "editor",
		name: "contributing",
		message: "contributing instructions:",
		when: (answers) => {
			return answers.hasContributionSection;
		},
	},
	{
		type: "confirm",
		name: "hasTestSection",
		message: "want to add tests section?:",
		default: true,
	},
	{
		type: "editor",
		name: "tests",
		message: "project tests: ",
		when: (answers) => {
			return answers.hasTestSection;
		},
	},
];

function validateUrl(input) {
	return input.substring(0, 7) != "http://" &&
		input.substring(0, 8) != "https://"
		? "Invalid url"
		: true;
}

function validateNonEmpty(input) {
	return !input || input === "" ? "Invalid input" : true;
}

function validateEmail(input) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return !input || !re.test(input) ? "Invalid email" : true;
}

function promptUserAsync() {
	return inquirer.prompt(questions);
}

module.exports = promptUserAsync;
