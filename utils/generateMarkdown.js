
const renderLicenseBadge = (license) => {
    switch (license) {
        case "MIT":
            return "https://img.shields.io/badge/License-MIT-yellow.svg";

        case "Mozilla":
            return "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg";

        case "Apache 2.0":
            return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";

        case "BSD 3":
            return "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg";

        case "GPL 3.0":
            return "https://img.shields.io/badge/License-GPL%20v3-blue.svg";

        default:
            return "";
    };
};



const generateMarkdown = (data) => {

    let licenseURL = renderLicenseBadge(data.license);

    return `# **${data.title}**
      
![badge](${licenseURL})

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}

## License
![badge](${licenseURL})
    
This application is covered by the ${data.license} license. 

## Contributing
👪 ${data.contributing}

## Questions
🤔 ${data.questions}

#### Find me on GitHub: [${data.github}](https://github.com/${data.github})

#### Email me with any questions: ${data.email}`
    
};

module.exports = {
    generateMarkdown
};
    


