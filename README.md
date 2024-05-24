## Hi! [Project Demo](https://golden-bublanina-72006a.netlify.app/)

A few words from me

I was trying to do as much of work as possible in ±3 hours but have to admit that there were a few bottlenecks. 
First, I couldn't spend all these 3 hours simultaneously due to some force majeure. However, I was trying to control the overall time I spent on the task and I'm ready to pass any additional assignments if needed. Overall time spent 3 - 3:15 though I could spend a little more to provide some refinements
Second, I spent too much time on bootstrapping projects. Adding linter, prettier, looking for tailwind color schemas, and so on. 
Third, I got screwed with time management when decided to put a little more effort into discount code input than into other elements. And needed to finish other things in a bit of a rush

My working plan consisted of the following:
- [ ] Project starter
  - [ ] IDE extensions
  - [ ] picking tailwind color scheme
  - [ ] CRA with typescript
  - [ ] folders structure
  - [ ] ts-config
  - [ ] linter
  - [ ] prettier
  - [ ] package.json scripts for pre-commit scripts
- [ ] Main libs set up
  - [ ] redux toolkit
  - [ ] tailwind
- [ ] Components work
  - [ ] components logic, UX, reusability - I tried to develop components as if they will be used in a reusable library
  - [ ] logic testing
  - [ ] additional components (loaders, hr, labels)
- [ ] lint and types check

What I think I did well:
- [ ] came up with complex discount code check and generation logic with mock server request
- [ ] added loading state for inputs  and also success/error variants
- [ ] reusable typescript and UI elements customization from dummy stateless components to more powerful ones
- [ ] used a minimum of additional libraries, only dev dependencies, small helpers like redux toolkit and UI lib which I took inspiration from (it is called flowbite)
- [ ] tried to include as much of useful tooling like linters as possible (maybe too much)


What I didn't have time to work on:
- [ ] advanced responsibility
- [ ] improved UI and styling (I'm not good when it comes to designing UI anyway), dark theme
- [ ] more additional components for improved UX, like tooltips and alerts
- [ ] additional testing
- [ ] UI lib showcase as some app/form
- [ ] proper documentation :)
- [ ] use more exotic react api, though I like to keep it simple and not overengineer
- [ ] didn't have time to leave proper amount of comments


# How to run instructions

Did you see demo link at the first line? The code builds well, I swear. 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

