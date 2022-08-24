const generateREADME = (response) => {
    return `# ${response.title} \n \n ![NPM Package](https://img.shields.io/npm/l/inquirer) \n \n ## Description \n \n ${response.description} \n \n ## Table of Contents \n \n [Installation](#installation) / \n \n [Usage](#usage) / \n \n [Liscence](#liscence) / \n \n [Contributing](#contributing) / \n \n [Tests](#tests) / \n \n [Questions](#questions) / \n \n ## Installation \n \n ${response.installation} \n \n ## Usage \n \n ${response.usage} \n \n ## Liscence \n \n !! "ISC" is the supported Liscence for this application !!\n \n ## Contributing \n \n ${response.contribution} \n \n ## Tests \n \n ${response.testing} \n \n ## Questions \n \n [Click here to visit my github profile!](https://github.com/${response.github}) \n \n Any additional questions-- \n \n Send an email to: ${response.email}`
}

module.exports = {
    generateREADME
}