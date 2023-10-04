# Overview

Create a Quiz / Test Generator App. It will include a registration, login, subject selection, multiple choice test, and score keeping. This app will not include a backend data storage or authentication.

## Table of Contents

- [Overview](#overview)
  - [Table of Contents](#table-of-contents)
    - [Authors](#authors)
    - [Goals](#goals)
  - [Project Instructions](#project-instructions)
    - [Github Conventions](#github-conventions)
    - [Cloning](#cloning)
    - [Making A Pull Request](#making-a-pull-request)
    - [Branching and Merging off your dev branch](#branching-and-merging-off-your-dev-branch)
    - [Project File Organization](#project-file-organization)
  - [Tools](#tools)
    - [Built With](#built-with)

### Authors

- Lead
  - Edward Arasato
    - Github: [https://github.com/Aim4dabush](https://github.com/Aim4dabush)
    - LinkedIn: [https://www.linkedin.com/in/ed-arasato-74614112a/](https://www.linkedin.com/in/ed-arasato-74614112a/)
- Developers
  - Pablo Gomez-Echegaray
    - Github: [https://github.com/Gome510](https://github.com/Gome510)
    - LinkedIn: [https://www.linkedin.com/in/pablo-gomez-echegaray-39347a206/](https://www.linkedin.com/in/pablo-gomez-echegaray-39347a206/)
  - Francesca Immediato
    - Github: [https://github.com/FrancescaImmediato](https://github.com/FrancescaImmediato)
    - LinkedIn: [https://www.linkedin.com/in/francesca-immediato-896348232/](https://www.linkedin.com/in/francesca-immediato-896348232/)
  - Kimberly Encinas
    - Github: [https://github.com/kimbencinas](https://github.com/kimbencinas)
    - LinkedIn: [https://www.linkedin.com/in/kimberly-encinas-656929252/](https://www.linkedin.com/in/kimberly-encinas-656929252/)

### Goals

- MVP (Minimum Viable Project)
  - User can register information for login
  - User can login after registering
  - User is navigated to a subject selection page for quiz
  - User will have 6 subjects to select
  - User will have a preparation page before the quiz begins
  - User can click a button to begin
  - User will be able to click a multiple choice answer
  - User will have 10 questions for each subject
  - User will be able to click to move on to the next question
  - User will see a display of test score of how many questions they user was correct out of the number questions
  - User will have option to retake test or navigate back to subject selection page
  - User will be able to logout when finished
- Stretch goals
  - Responsive pages
  - Add more subjects for user
  - Timer countdown instead of a button to start quiz
  - Add more than 10 questions for each subject
  - Display the score percentage of correct answers
  - Display the questions user got wrong
  - Display all score tests from best to worst

## Project Instructions

### Github Conventions

1. Never work on the master branch. Always create your own dev branch.
2. Branch name convention will be first name, first initial of last name, and followed by "Dev".
   - Example my name is Edward Arasato so my branch name will be `EdwardADev`
3. Make sure to break up your work and push after each part is done. Typically it should be create page and/or component, then fetch data from API, then html with data, and then any functionality.
4. Always update your branch everyday before you start working even if you think there is nothing to update by using `git fetch origin master`.
5. Never merge your work until I have approved the work. Make sure to message me when you make a pull request.

### Cloning

1. Go to repository and copy the https url.
2. In your local terminal enter `git clone ` then paste the url after clone.
3. Once cloned navigate to the folder Intern-Quiz-Generator by `cd Intern-Quiz-Generator`.
4. Once in the folder be sure install dependencies with `npm install` or `npm i` for short.
5. After install immediately make your branch with `git checkout -b ` then your dev branch name.
   - **Note: Make sure to follow dev branch naming convention mentioned in the "Conventions" section.**
   - Note: *You can create more branches off of your dev branch if you would like. I'll put instructions for that in the next section.*
6. Then navigate to your newly created dev branch with `git checkout ` then the dev branch you created.
7. Any questions please ask.

### Making A Pull Request

1. When you are ready to push your work add your files with `git add ` the files you are pushing or `git add .` if you are adding all files.
2. Make a commit with `git commit -m ` then your message in quotations.
3. Commit messages should include the page or component you worked on and a brief description on what you did. You can ask me if your're unsure.
   - Example "Login Page - created username and password fields"
4. Then push your work with `git push origin ` then your dev branch.

### Branching and Merging off your dev branch

1. **This section is optional but is helpful so if you want to play around with the code you won't mess up your dev branch.**
2. You should already be in your dev branch
3. Create the branch you would like to use with `git checkout -b ` then your branch name.
   - **Note: Does not need follow naming convention since we will never see this branch.**
4. Navigate to branch with `git checkout ` then your branch name.
5. Once you are finish and are satisfy with your work navigate back to your dev branch with `git checkout ` then your dev branch name.
6. You will now merge the work you did on your other branch with `git merge ` then branch name you did the work on.
7. Then commit the merge with a note with `git commit -m "Merging work into dev branch "` then your dev branch after branch in quotation.
8. Any questions please ask.

### Project File Organization
1. Pages folder is reserved for routing.
2. Within Pages folder create a folder for your page
   - Example if I want to create the login page i would create a folder called "login-page".
   - Within the folder my jsx file would be named "LoginPage.jsx" and "LoginPage.css" if I need styling.
3. Component folder is reserved for any other jsx files other than the page.
4. Within Component folder create a folder of the component you are creating.
   - Example if I want to create a form the folder would be called "login-form"
   - Within the folder my jsx file would named "LoginForm.jsx" and "LoginForm.css" if I need styling.
5. You then import any components into the page you want to display.
   - Example in the pages folder in "LoginPage.jsx" file i would import "LoginForm.jsx" file.
6. Any questions please ask.

## Tools

### Built With

- Vite: [https://vitejs.dev/guide/](https://vitejs.dev/guide/)
- React-Bootstrap: [https://react-bootstrap.github.io/](https://react-bootstrap.github.io/)
- Public API: [https://the-trivia-api.com/docs/v2/#tag/Questions](https://the-trivia-api.com/docs/v2/#tag/Questions)