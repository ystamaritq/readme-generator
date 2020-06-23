var github = require("octonode");

var client = github.client();

function getInstallationTableOfContentLink(data) {
	if (data.hasInstallationSection) return "- [Installation](#installation)";
	else return "";
}

function getUsageTableOfContentLink(data) {
	if (data.hasUsageSection) return "- [Usage](#usage)";
	else return "";
}

function getContributingTableOfContentLink(data) {
	if (data.hasContributionSection) return "- [Contributing](#contributing)";
	else return "";
}

function getTestTableOfContentLink(data) {
	if (data.hasTestSection) return "- [Tests](#tests)";
	else return "";
}

function getInstallationSection(data) {
	if (data.hasInstallationSection)
		return "\n## Installation\n\n" + data.installation + "\n";
	else return "";
}

function getUsageSection(data) {
	if (data.hasUsageSection) return "\n## Usage\n\n" + data.usage + "\n";
	else return "";
}

function getContributingSection(data) {
	if (data.hasContributionSection)
		return "\n## Contributing\n\n" + data.contributing + "\n";
	else return "";
}

function getTestSection(data) {
	if (data.hasTestSection) return "\n## Test\n\n" + data.tests + "\n";
	else return "";
}

function getUserDataFromGHAsync(username) {
	return new Promise((resolve, reject) => {
		client.get("/users/" + username, {}, function (err, status, body, headers) {
			if (err) return reject(err);
			else return resolve(body);
		});
	});
}

function generateMarkdownString(data, ghData) {
	return `

# ${data.title}

${data.badges}

## Description

${data.description}

## Table of Contents

${getInstallationTableOfContentLink(data)}
${getUsageTableOfContentLink(data)}
- [License](#license)
${getContributingTableOfContentLink(data)}
${getTestTableOfContentLink(data)}
- [Questions](#questions)
  - [User GitHub profile picture](#user-gitHub-profile-picture)
  - [User GitHub email](#user-gitHub-email)

${getInstallationSection(data)}

${getUsageSection(data)}

## License

This project is licensed under the terms of the ${data.license}

${getContributingSection(data)}

${getTestSection(data)}

## Questions

### User GitHub profile picture

![image](${ghData.avatar_url})

If you have any questions about the repo, open an issue or contact [${
		data.username
	}](${data.username}) directly at ${data.gh_email}

`;
}

async function generateMarkdownAsync(data) {
	const ghData = await getUserDataFromGHAsync(data.username);
	var markdown = generateMarkdownString(data, ghData);
	return markdown;
}

module.exports = {
	generateMarkdownAsync: generateMarkdownAsync,
};
