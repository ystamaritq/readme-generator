const promptUserAsync = require("./utils/promptUser");
const { generateMarkdownAsync } = require("./utils/generateMarkdown");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function showInstructions() {
	console.log(
		"\n  *****************************************************************************************\n" +
			"* This utility will walk you through creating a README.md file.\n\n" +
			"* Some section will allow to enter complex markdown text using your default text editor.\n\n" +
			"* Press ^C at any time to quit." +
			"\n  *****************************************************************************************\n"
	);
}

async function init() {
	//custom instructor to use the generator
	showInstructions();

	try {
		const answers = await promptUserAsync();
		const markdownStr = await generateMarkdownAsync(answers);
		await writeFileAsync("README.md", markdownStr);
		console.log("File Successfully Generated");
	} catch (err) {
		console.log("There was an error: " + err);
	}
}

init();
