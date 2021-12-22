# React Project

## Goal

This project aims to teach me React and ES6 level Javascript. It will use Docker
and docker compose to cement that knowledge. This project will not use
Typescript, a SQL database, or any other sort of outside component. Community
React libraries are allowed.

### Vision

A website to create and list the results of a race. There should be a home page,
(at least) a page for results and a page to create / update results. Deletion is
not to be undertaken.

## Usage

### Requirements

- Docker
- A working internet connection

### Running

Open a terminal in this directory. Once here, type `docker-compose up --build`.
This should build a Docker image if it doesn't exist, setup the network for the
container and start serving the page on `http://localhost:3001`. You can stop
the container as you would any other process, but make sure to run
`docker-compose down` to cleanup any resources as well.

## Improvements / Issues

- Wrapping `Route`s with a Context doesn't work unless you wrap the parent
  `Routes` element. Sharing is too global.

## React Generated Documentation

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
