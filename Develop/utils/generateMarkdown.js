function generateMarkdown(data) {
	return `
  
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)

# ${data.title}
--

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

--

## Description

${data.description}

--

## Installation

${data.installation}

--

## Usage

${data.usage}

## License

${data.license}

[https://choosealicense.com/](https://choosealicense.com/)

## Contributing

${data.contribution}

## Tests

${data.tests}

## Questions

### ${data.questions[0]}
### ${data.questions[1]}

## User GitHub profile picture

## User GitHub email

## Contributing


/* template code ends */

`;
}

module.exports = generateMarkdown;
