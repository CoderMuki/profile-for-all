# Profile For All

- Profile template that's ready to use.
- Make tiny tweaks, fill your data in pre-defined templates and site is ready to go.
- Customize colors and backgrounds to your wish.

### How does the output look?

[Authors profile](https://mukilans-profile.web.app/) website at the time of release

## How to run the project locally?

- This project is built with Angular v15.
 > You'll Need:
    
    - Node version ^14.20.0 || ^16.13.0 || ^18.10.0
    - Angular CLI v15.2.11

- Setup your development environment and in this folders root terminal run `npm run serveall` to run the project in your local network on port `5200`
- The application can be viewed on browser with url `localhost:5200` or `your-IP:5200`

## How to fill data?

`data.json` file in `src/assets` path is where you should go first.

- Fill the `data.json` as you would fill out a form:

    > Name

    > Your Role

    > Main Skills 

    > Start date of your experience

    > Your Objective

## Images and Icons

- In `profile-home.component.scss` file under `.my-image` class replace the `background-image` url value to the image you add in the `src/assets/images` path.
- If you want to add your own `favicon.ico`; do so by replacing the existing file under `src` folder.

## Formatted data

- Some inputs in `data.json` must follow a certain format.

***for eg:***

> About : while filling your about details, instead of hardcoding your experience; write `<$exp_long$>` where the experience goes. The code replaces the text `<$exp_long$>` with your actual experience converted to years and months using Start date of your experience `exp_start_date` you filled eariler.

> Skills : An array of objects with every skill as an element in the array with skill header in the array's key

> Work, Experience, Social handles and Projects: follows a similar data structure as an array of objects

*Follow the data structure pattern for seamless value replacement.*

### Watch out for comments

- Read out the comments in all files to know better of what you are working with and changing what affects what


## Credits:

-   Framework - Angular
-   Designed - SCSS
-   Fonts - Google APIs
-   Icons - FontAwesome on Cloudfare

### Note from Author:

-   This project was made by someone whose little dream was to have his own profile up and running.
-   Now everyone can have their own with their own taste and value with little changes to this template.
-   This project is made for budding devs and students.
-   Liked this? share it to your friends.


__If you believe you can make valuable changes and contribute to this project, please do so by sending in a Pull Request__