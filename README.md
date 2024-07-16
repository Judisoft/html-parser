# Project Overview

This project is the frontend component of an HTML Parser / Web Scraper web application. The frontend allows users to input a URL, submit it for analysis, and view detailed results of the web page's structure and content in a user-friendly interface.

## Features
- URL Input Form: A text field where users can enter a URL to be analyzed.
- Submit Button: Triggers the analysis of the entered URL.
- Results Display: Shows the analysis results in a structured, tabular format.
- HTML Version: Displays the HTML version of the document.
- Page Title: Shows the page title.
- Headings Count: Lists the number of headings grouped by heading level.
- Links Count: Counts internal and external links.
- Login Form Detection: Indicates whether the page contains a login form.
- Link Validation: Displays the reachability status of all links, including error messages for any unreachable links.

## Code Structure
- src/: Contains the main application code.
- components/: React components for the UI.
- App.js: Main application component.
- App.css: Styling for the application.
- images/: Contains image assets like the logo.

## User Interface
The user interface consists of a simple form where users can input a URL and submit it for analysis. The results are displayed below the form in a clean and organized table format.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Author
- Kum Jude Bama [kumjude09@gmail.com]
