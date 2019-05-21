# foodoo-alexa-skill

## Set up the dev environment

This repository is set-up for unix systems only. Some scripts will not work on Windows, so it is storngly recommended that you work with this repository on a unix machine. 

### Prelimitaries

- You need to have git, npm and node installed on your machine. 
- Make sure that you have a valid AWS developer account and a Amazon developer account (two different things).
- Sign in/up on GitHub!
- Install the npm ask-cli package globally via: `sudo npm install -g ask-cli` and follow the guides on [Developer.Amazon](https://developer.amazon.com/de/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html?&sc_category=Owned&sc_channel=RD&sc_campaign=Evangelism2018&sc_publisher=github&sc_content=Content&sc_detail=fact-nodejs-V2_CLI-1&sc_funnel=Convert&sc_country=WW&sc_medium=Owned_RD_Evangelism2018_github_Content_fact-nodejs-V2_CLI-1_Convert_WW_beginnersdevs&sc_segment=beginnersdevs) to set-up ask-cli on your machine. 

### IDE / Editor

Get yourself VSCode for a quick start. On Linux just run: `snap install code`. Other IDEs e.g. Webstorm work fine as well, just make sure that you have nice git and eslint support within your editor for more convenience.

For VSCode, we can recommend following extensions:

- eslint: A package that will show you all eslint linting errors within your code. Make sure to activate the checkbox "Auto fix on save" to ensure that all auto linting fixes will be fixed on every file save. 

### Set-up the repo locally

Clone the repository and run `npm install` to get all dependecies. Following a small overview about all our dependecies and why we need them:

### Dependency Overivew

- ask-sdk: The Software Development Kit for Alexa Skill development.

### Global Dependencies 

- ask-cli: The command line tools to deploy the Alexa Skill and the lambda function via the console.

## Working with the repository

The repository follows the [offical guidelines](https://developer.amazon.com/de/docs/smapi/ask-cli-intro.html#create-new-skill) from the Amazon Developer Documentation.

The repository looks like follows:

```
skill project folder
|-- .ask
    |-- config
|-- hooks
    |-- post_new_hook
    |-- pre_deploy_hook
|-- lambda
    |-- source code files for the Lambda function
|-- models
    |-- JSON files, one per locale, containing interaction models (for example, en-US.json)
|-- skill.json
```

### Description: 

- .ask – A hidden folder that contains the ASK CLI's config file.
- hooks – A folder that contains the hook scripts. Amazon provides two hooks, post_new_hook and pre_deploy_hook.
- lambda – A folder that contains the source code for the skill's AWS Lambda function. The files contained here - depend on the runtime for the skill.
- models – A folder that contains one more interaction models for the skill. Each interaction model is defined in a - JSON file named according to the locale. For example, en-US.json and de-DE.json.
- skill.json – A file that contains the skill manifest.

## Working with Amazon Alexa

I follwed the [instructions](https://github.com/alexa/skill-sample-nodejs-fact/blob/master/instructions/) on the offical Alexa GitHub repository in order to set up the Alexa Skill on the Alexa Console, as well as the AWS lambda function on AWS. If you want to have a feeling for how this works, just create your own mockup environment really fast!

### Skill Architecture
Each skill consists of two basic parts, a front end and a back end.
The front end is the voice interface, or VUI.
The voice interface is configured through the voice interaction model.
The back end is where the logic of your skill resides.

### Additional Resources

#### Community
* [Amazon Developer Forums](https://forums.developer.amazon.com/spaces/165/index.html) - Join the conversation!
* [Hackster.io](https://www.hackster.io/amazon-alexa) - See what others are building with Alexa.

#### Tutorials & Guides
* [Voice Design Guide](https://developer.amazon.com/designing-for-voice/) - A great resource for learning conversational and voice user interface design.
* [Codecademy: Learn Alexa](https://www.codecademy.com/learn/learn-alexa) - Learn how to build an Alexa Skill from within your browser with this beginner friendly tutorial on Codecademy!

#### Documentation
* [Official Alexa Skills Kit Node.js SDK](https://www.npmjs.com/package/ask-sdk) - The Official Node.js SDK Documentation
*  [Official Alexa Skills Kit Documentation](https://developer.amazon.com/docs/ask-overviews/build-skills-with-the-alexa-skills-kit.html) - Official Alexa Skills Kit Documentation

## Working with AWS

### Introduction

Check out one of the following guides [1](https://www.ideaminetech.com/blog/aws-services-in-simple-terms/), [2](https://www.expeditedssl.com/aws-in-plain-english) for a quick overview over the different AWS products. 

## Deploying

Set up ask cli as described above. Write `ask deploy` into the command line on repository root folder level to automatically deploy the AWS lambda function and the Alexa skill.

## Testing

### Manual testing via ask command line interface

Write `ask dialog --locale [de-De | en-US | en-GB | ... ]` to start the interaction with the Alexa Skill. Write `Alexa start Foodoo` to start the Foodoo Intent and interact with our Skill! 
`!quit` lets you leave the interaction again. 
