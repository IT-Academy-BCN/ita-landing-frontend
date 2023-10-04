
# ITA LANDING FRONTEND

Welcome to the ITA LANDING GitHub repository! 

This repository houses the source code for the IT Academy's landing page and the accompanying administrative backoffice. 
IT Academy is a leading educational institution dedicated to providing tech education. 

**The code is developed by students who have completed the IT Academy Bootcamp** and are currently in the project phase. In these projects, there is a Product Owner and a Scrum Master to enable students to apply their knowledge in a real-world environment.


## Demo

https://it-academy-landing.netlify.app/


## Screenshots

![App Screenshot](https://user-images.githubusercontent.com/92028251/272572895-7ca2d8a7-71e0-4f3c-bee6-a47194030b6a.png)


## Instalation

```console
git clone https://github.com/IT-Academy-BCN/ita-landing-frontend.git
npm i
npm run dev
```


## Contribution Guidelines

Contributions are always welcome!


To ensure a smooth and organized development process, please follow these guidelines when contributing:

### Folder Structure
Components: All React components should be created within the /components folder. These components should focus solely on rendering and presenting data. They should not contain any logic or API calls.

Pages: If it is necessary to create a new page, please do so within the /pages folder. Pages should serve as the top-level components that define the structure of a route and may contain a composition of components. Keep pages clean and avoid adding complex logic directly to them.

### Separation of Concerns
Logic and API Calls: Components should not contain logic or make API calls directly. For handling application logic and data fetching, utilize either the React Context API or Redux state management. Create separate files for actions, reducers, and selectors as needed within the Redux structure.

Redux: If you're working on state management, follow the Redux pattern for actions and reducers. Ensure that reducers are pure functions and keep state updates predictable.

### Git Workflow

1. Branches: When working on a new feature or bug fix, create a new branch from the dev branch with a descriptive name, such as feature/add-user-profile. Make your changes within this branch.

2. Commits: Make frequent, well-documented commits. Use clear and concise commit messages that describe the purpose of each commit.

3. Pull Requests: Submit a pull request when your feature or bug fix is ready for review. Include a description of your changes in the pull request, and reference any related issues, if applicable.

### Code Quality

1. Code Style: Maintain a consistent code style throughout the project. Use appropriate naming conventions, indentation, and follow any established coding standards.

2. Code Reviews: Be open to feedback during code reviews. Reviewers may suggest improvements or changes to ensure code quality and maintainability.


By following these contribution guidelines, you'll help maintain a clean and organized codebase,


## Used By

This project is being used by IT Academy at Barcelona Activa




## Acknowledgements

To all the students whose hard work makes these projects possible and move forward.

## FAQ

#### What are the requirements to participate in projects?

Complete the React specialization at IT Academy.


#### Why should I collaborate on this project?

Because it provides a real-world environment to apply all the concepts learned in the bootcamp. It also allows for learning more advanced concepts and facing real-life situations that may occur in a company.

