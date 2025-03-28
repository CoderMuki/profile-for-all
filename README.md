# Profile For All

- Build your profile, create a website and host it.
- Profile template that's ready to build and deploy in minutes.
- Make tiny tweaks, fill your data in pre-defined templates and your site is ready to go.
- Customize colors and backgrounds to your wish.
- Follow the `README.md` for complete instructions to build the site locally and deploy it on Firebase

### How does the output look?

[How the project looks initially?](https://online-profile-template.web.app/)

[Authors profile](https://mukilans-profile.web.app/) website at the time of release

## How to run the project locally?

- This project is built with Angular v15.

 > You'll Need:
    
    - Node version ^14.20.0 || ^16.13.0 || ^18.10.0
    - Angular CLI v15.2.11
    - Code Editor

- Clone the repository and run `npm i` in the root folder.
- Setup your development environment and in the folder's root terminal execute `npm run serveall` to run the project in your local network on port `5200`
- The application can be viewed on browser with url `localhost:5200` or `your-IP:5200`

## How to fill data?

`data.json` file in `src/assets` path is where you should go first.

- Fill the `data.json` as you would fill out a form:

    > Name

    > Your Role

    > Main Skills 

    > Start date of your experience

    > Your Objective

## Formatted data

- Some inputs in `data.json` must follow a certain format.

***for eg:***

> About : while filling your about details, instead of hardcoding your 'experience' write `<$exp_long$>` where the experience goes. The code replaces the text `<$exp_long$>` with your actual experience converted to years and months using Start date of your experience `exp_start_date` you filled eariler.

> Skills : An array of objects with every skill as an element in the array; With skill header as the array's key

> Work, Experience, Social handles and Projects: follows a similar data structure as an array of objects

*Follow the data structure pattern for seamless value replacement.*

## Images and Icons

- In `profile-home.component.scss` file under `.my-image` class replace the `background-image` url value to the image you add in the `src/assets/images` path.
- If you want to add your own `favicon.ico`; do so by replacing the existing file under `src` folder.

## How to Deploy on Firebase?

- This website can be easily hosted on firebase within minutes.

>  Prerequisite : a gmail account

After the site is built to your satisfaction in local environment follow the below steps.

- Execute `ng build` in your project root folder terminal. A `dist` folder containing your compiled project will be created.
- Open the google firebase website and go to firebase console.
- Create new firebase project, Follow the steps to create a project and setup hosting for the project.
- By now you must have a dynamic website domain ending with `.web.app`.
- Replace the `firebaseConfig` interface in your `app.component.ts` file and uncomment the `const app` and `const analytics` lines.
- Execute `npm i -g firebase-tools` in terminal.
- Execute `ng build` to update all codes. 
- In the project root folder Execute `firebase init`.
- Use arrows to move down and select `Hosting` using spacebar.
- Select `Use an existing project` and select your project.
- For `public directory` set `dist` and configure as a Single Page App to `Y`.
- Set automatic builds to `N` when prompted.
- Firebase initialization is now completed and a `firebase.json` file will be created outside of `src` folder.
- Add your site name in `firebase.json` under `hosting` with keyname `site`.
- In `firebase.json` under `hosting` with keyname `public` add the name of the folder inside your `dist` folder as `dist/profile-for-all`.
- Execute `firebase deploy --only hosting:your-project-name`.
- Your website is now up and running.

### Watch out for comments

- Check out the comments in all files to know better of what you are working with and changing what affects what

## Credits:

-   Framework - Angular
-   Hosting - Firebase
-   Designs - SCSS
-   Fonts - Google APIs
-   Icons - FontAwesome on Cloudfare

<div align="left">
    <img src="https://angular.io/assets/images/logos/angular/angular.svg" height="40" width="40">
    <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" height="40" width="40">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" height="40" width="40">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/google/google-original.svg" height="35" width="35">
    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Font_Awesome_logomark_blue.svg" height="40" width="40">
</div>

### Note from Author:

-   This project was made by someone whose little dream was to have a profile of his own up and running.
-   Now everyone can have their own with their own taste and value with little changes to this template.
-   This project is made for budding devs and students.
-   Liked this? share it to your friends.


__If you believe you can make valuable changes and contribute to this project, please do so by sending in a Pull Request__