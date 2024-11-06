<img width="400" height="200" src="https://github.com/user-attachments/assets/b40e5459-f5fb-4132-bbb9-1ac925d560b0">

A simple helper app designed to interface with [Start.gg](https://www.start.gg/) brackets. Tourneypal will primarily allow management of sets within a bracket for the uses of streaming. Including a full data export for stream overlays.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.

## Screenshots

<img src="https://github.com/user-attachments/assets/dd380b11-7386-4965-9046-96aa284bdcc4">
<img src="https://github.com/user-attachments/assets/22d64b38-bb44-4c55-b496-6b60d3a8a617">

## Project Setup Instructions (For Development)

To setup this project for development, first:
1. Fork and clone this repository using [this guide](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) by GitHub
2. Navigate to the root of this project on your computer (tourneypal)
3. Run the command `npm install` to install all dependencies needed.
4. To connect your start.gg account, follow the instructions [to connect the API key](#startgg-api-connection). 
5. Run the command `npm start` to run the program as a standalone application, this may take a few seconds.
6. Done!

## Start.gg API Connection
In order for tourneypal to access start.gg tournaments, it uses your API key to query start.gg's api services and retrieve data.

In order to set the project's API key, find `environment.example.ts` at location `./src/environments/`. Duplicate the file and name it `environment.development.ts`, it **must** be named correctly for the program to find it.

After that simply set the variable `STARTGG_API_KEY` in `environment.development.ts` to your key. 

*To get an API key, please refer to [this guide on start.gg](https://developer.start.gg/docs/authentication/) to generate a token.*