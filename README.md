# Tree Shaking Experiment - 1

This is a simple repository to experiment with tree shaking in react js.
I've created a simple react app using CRA and added two components in About.js, those are `<About/>` and
`<Contact/>`. I've imported the `<About/>` component in App.js, and I'm not using the `<Contact/>` component anywhere in the app. Normally when we bundle the app for production, all the components gets bundled together in a single main.js file. But when we used Named exports for components, tree shaking will remove the unused components from the bundle.

## Steps to reproduce

1. Clone the repository
2. Run `npm install`
3. Run `npm run build`
4. Install `serve` package globally by running `npm install -g serve`
5. Run `serve -s build`

Now you can see the app running in the browser. Open the dev tools and check the network tab, you can see that the main.js file is very small in size because the unused component is removed from the bundle.
