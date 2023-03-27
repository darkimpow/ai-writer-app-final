## MARKETING AI APP

Our team has been hired to build an app for marketers,  with the focus on a desktop version. This app will allow  marketers to write content for their website with the help of AI.
 
This project will be bootstrapped with Tailwind.CSS, GitHub will be used for source control, project management will  use GitHub and ZenHub, the prototype will be done on Figma, the  frontend will use React and the backend will use Supabase.

## As a user I can see the “All Projects” page

### The description if this issue is:
>- Create a static web page called "All Projects" using the React.js framework.
>- This page will display a list of all generated projects in a visually appealing and easy-to-navigate manner.
>- The page will be designed using HTML, CSS, and JavaScript, which will be implemented as React components.
>- While the page will not have any working functionality yet, it will provide users with a clear and concise overview of all projects, allowing them to easily find and select the project they are working on.
>- This will ultimately improve the user experience and help increase engagement with the website.

### Step by step tasks:

- [x] Meet team members to discuss the overall goal
- [x] Clone the main branch repository
- [x] Create a `feature/all-projects` branch
- [x] Create a `projects` folder in src
- [x] Create `AllProject.js` and other components in projects folder
- [x] Git process
```
e.g. :
feature/all-projects
git push feature/all-projects

1a. git checkout -b feature/all-projects/main-section
1b. git checkout feature/all-projects && git merge feature/all-projects/main-section && git push feature/all-projects
1c. git pull feature/all-projects

2a. git checkout -b feature/all-projects/sidebar
2b. git checkout feature/all-projects && git merge feature/all-projects/sidebar && git push feature/all-projects
2c. git pull feature/all-projects
```
- [x] The "HTML/CSS/JS" version in React components.

- [x] Jason creates `TableHeader` component in (feature/all-projects-table-header)

- [x] Amir creates `TableBody ` component in (feature/all-projects-table-body)

- [x] Jason is transferred to work on another issue.

- [x] Pull main now. Here are the steps:
  `git fetch -a`, while on your branch, do `git merge main`, Go to one of the new URLs and be sure it works for you `localhost:3000/dashboard`

- [x] Continue styling and last touch ups on the `All Projects`

- [x] http://localhost:3000/dashboard/projects

- [ ] Push to GitHub, Send a Pull Request, Add Dele to Review