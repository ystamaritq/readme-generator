function generateMarkdown(data) {
	return `
  
${data.badges}

# ${data.title}

## Table of Contents

- [Project Title](#project-title)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
  - [User GitHub profile picture](#user-gitHub-profile-picture)
  - [User GitHub email](#user-gitHub-email)


## Description

${data.description}


## Installation

${data.installation}


## Usage

${data.usage}

## License

${data.license}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

### User GitHub profile picture
- ${data.profile_picture}
### User GitHub email
- ${data.gh_email}

`;
}

module.exports = generateMarkdown;
