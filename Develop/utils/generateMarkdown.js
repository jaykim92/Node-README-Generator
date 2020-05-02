function generateRepo(username, title) {
  if (username && title) {
    return `https://github.com/${username}/${title}`;
  } else {
    return 'Repository URL could not be generated'
  };
};

function generatePicture(username) {
  if (username) {
    return `https://github.com/${username}.png?size=200`;
  } else {
    return 'Picture could not be found'
  };
};

function generateBadge(username, title) {
  if (username && title) {
    return `https://img.shields.io/github/repo-size/${username}/${title}`;
  } else {
    return 'Badge could not be generated'
  }
};

function generateLink(username, title) {
  if (username && title) {
    return `https://${username}.github.io/${title}/`;
  } else {
    return 'URL could not be generated';
  };
};

function capitalize(title) {
  const str = title;
  const capitalized = str.charAt(0).toUpperCase() + str.substring(1);
  return capitalized;
};

function generateMarkdown(data) {
  return `
# ${capitalize(data.title)} ![alt text](${generateBadge(data.username, data.title)} "Size Badge")
[Project URL](${generateLink(data.username, data.title)})

## Table of contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

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

${data.test}

## Questions

Forward all questions to ${data.email}

The full repository can be viewed at:
${generateRepo(data.username, data.title)}
![Profile Picture](${generatePicture(data.username)} "Profile Picture")

`;
};

module.exports = generateMarkdown;