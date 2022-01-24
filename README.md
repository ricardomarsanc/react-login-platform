# React Login Platform

This project was created using [Create React App](https://github.com/facebook/create-react-app). The main reasons are that since the project scope
is not too big, Create React App is a good starting point to include all the necessary dependencies to work with TypeScript and Redux. In case the
project scope increases in the future, it will be possible to use the `eject` command to uncouple the application and be able to export it with
tools like Webpack or use another provider instead.

## Information

The application has been built using Firebase as a way to deploy and authenticate users in the app.

- Test user: test1@test.com
- Password: test01

Feel free to register with a new user and login into the page.

I haven't used techniques like Mobile first or so, but I tried to keep everything "usable" for almost every screen size.

## Further Work

- Refactor code for Weather/Country components to inherit from a more generic one
- Hide environment variables using (for example) external tools like GitGuardian
- Add a more meaningful error logging both for Login and for Weather/Country components for when reject API response
- Add testing (Jest + React Testing Library)
- Add storybook to the project
- Add new ways of authentication like Google Authentication Provided (Already installed but not activated)

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
