# Readme Generator

Create a command-line application that dynamically generates a README.md from a user's input. The application will be invoked with the following command:

```sh
node index.js
```

The user will be prompted for their GitHub username and other information pertaining to the project the README is for.

The README will be populated with the following:

- At least one badge
- Project title
- Description
- Table of Contents
- Installation
- Usage
- License
- Contributing
- Tests
- Questions
- User GitHub profile picture
- User GitHub email

Following the [common templates for user stories](https://en.wikipedia.org/wiki/User_story#Common_templates), we can frame this challenge as follows:

```
AS A developer

I WANT a README generator

SO THAT I can easily put together a good README for a new project
```

Refer to the [Good README guide](../../01-HTML-Git-CSS/04-Supplemental/Good-README-Guide/README.md).

## Business Context

When creating an open source project on GitHub, it is important to have a quality README with information about the app--what is the app for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project. A command-line application will allow for quick and easy generation of a project README to get started quickly. This will allow a project creator to spend more time working on finishing the project and less time creating a good README.

## Minimum Requirements

- Functional, deployed application.

- GitHub repository with a unique name and a README describing project.

- The generated README includes the following sections:

  - Title
  - Description
  - Table of Contents
  - Installation
  - Usage
  - License
  - Contributing
  - Tests
  - Questions

- The generated README includes 1 badge that's specific to the repository.

```
GIVEN the developer has a GitHub profile and a repository

WHEN prompted for the developer's GitHub username and repo specific information

THEN a README for the repo is generated
```

---
