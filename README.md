# Tree Shaking Experiment - 1

This is a simple repository to experiment with tree shaking in react js.
I've created a simple react app using CRA and added two components in About.js, those are `<About/>` and
`<Contact/>`. I've imported the `<About/>` component in App.js, and I'm not using the `<Contact/>` component anywhere in the app. Normally when we bundle the app for production, all the components gets bundled together in a single main.js file. But when we used Named exports for components, tree shaking will remove the unused components from the bundle.

## Steps to reproduce

1. Clone the repository
   ```bash
    git clone https://github.com/thekavikumar/treeshaking-exp-1
   ```
2. Navigate to the project directory
   ```bash
    cd treeshaking-exp-1
   ```
3. Run `npm install`
4. Try modifying the `src/App.js` file, by importing the `Contact` component from `About.js` and using it in the `App` component.

   ```javascript
   import React from 'react';
   import { Contact } from './About';
   function App() {
     return (
       <div
         className="App"
         style={{
           display: 'flex',
           flexDirection: 'column',
           alignItems: 'center',
           justifyContent: 'center',
           height: '100vh',
         }}
       >
         <h1>Viewing App Component</h1>
         <Contact />
       </div>
     );
   }
   export default App;
   ```

5. Run `npm run build`
6. Install `serve` package globally by running `npm install -g serve`
7. Run `serve -s build`
8. Open the browser and navigate to `http://localhost:3000`
9. Open the dev tools and check the network tab, you can see that the main.js file is very large in size because the unused component is not removed from the bundle.

Now you can see the app running in the browser. Open the dev tools and check the network tab, you can see that the main.js file is very small in size because the unused component is removed from the bundle.
