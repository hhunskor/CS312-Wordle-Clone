# Final Project

![workflow status](https://github.com/csci0312-f22/project-frogfish/actions/workflows/node.js.yml/badge.svg)

Firebase url: https://frogfish-final-project.web.app

The goal of this project is to implement a Middlebury-themed spinoff of Wordle, with options for 4- and 6-letter versions in addition to the standard 5-letter Wordle format.

# Firebase Setup

All dependencies can be installed with npm install.

Executing npm start in the top-level directory successfully starts the application in the development environment.

All tests and linting pass with
npm test
npm run lint

The final version of the application is deployed to Firebase. The commands are
npm run build
npm run export
firebase deploy
