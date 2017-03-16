# FoodStuff
**A broken app to demonstrate side effect, available [here](https://foodstuff.surge.sh/)**

## Folder Structure
```
/
├── build                                  : Auto generated when project is built
│   ├── asset-manifest.json                : Contains asset size details can also be used for offline service workers
│   ├── favicon.ico                        : Self descriptive
│   ├── index.html                         : App entry html, uses template from  public folder
│   └── static                             : Contains all the static files
│       ├── css                            : Contains css generated for the application and its map file
│       ├── js                             : Contains js generated by webpack and its map file
│       └── media                          : Contains all media files , images, video, audio etc.
│
├── package.json                           : Contains app dependencies and configurations
│
├── public                                 : These will be used for building public assets
│   ├── favicon.ico                        : Self descriptive
│   └── index.html                         : HTML template for final build
│
├── src                                    : Root directory of javascript application
│   ├── components                         : Stateless Dumb Components, pure functional, only takes props
│   │   └── AppComponent                   : Component folder                
│   │       ├── assets                     : Assets concerning the particular component
│   │       │   ├── media                  : Folder for storing Images, audio, video etc
│   │       │   └── styles                 : Folder for storing style sheets
│   │       └── index.js                   : Main entry point for the component
│   │
│   ├── containers                         : Stateful Smart component, Redux connected components
│   │   └── AppContainer                   : Container folder
│   │       ├── assets                     : Assets concerning the particular container
│   │       │   ├── media                  : Folder for storing Images, audio, video etc
│   │       │   └── styles                 : Folder for storing style sheets
│   │       ├── actions.js                 : Contains actions concerning a particular container
│   │       ├── constants.js               : Contains constants concerning a particular Container
│   │       ├── index.js                   : Main entry point for the Container
│   │       └── reducer.js                 : Contains reducer concerning a particular container
│   │
│   ├── index.js                           : Main app entry point. Configured to use redux store and router
│   ├── rootReducer.js                     : Main reducer for making global state, other reducers should be imported here.
│   ├── routes.js                          : Contains routing configuration for the whole app
│   └── store.js                           : Contains global app store setup
│
├── .env                                   : Contains environment variables, secret, api keys etc.
└── yarn.lock                              : Lock file generated by yarn package manager
```

# ⚡ react <sup>-super-scripts</sup> ⚡

**This package adds super powers and allows custom configs without ejecting [Create React App](https://github.com/facebookincubator/create-react-app)**

## Features
Apart from features provided by [CRA](https://github.com/facebookincubator/create-react-app#whats-inside), this package adds more goodies listed below.

### Webpack
* **Webpack Dasboard**
	* you got to love webpack dashboard
	* Webpack dashboard is turned on by default,but it is configurable
	* you can disable it able it setting dashboard as false in react_super_script in package.json
       ```js
        {
		    ...

		     "react_super_scripts": {
			  "dashboard": true
		     }
        }
      ```
* **Faster builds**
	* added happyloader (pre configured).
	* you can enable it by setting webpackCache as true in react_super_script in package.json
   ```js
	 {
		...

		"react_super_scripts": {
			"webpackCache": true
		}
	 }
  ```
* **Hot module replacement**
	*  supports HMR for js files too.
* **Supports SASS and LESS**
	* write styles in css, sass or less
* **Webpack image loader**
	* for compressing images
* **Offline Plugin**
	* You can generate service worker for your web app, simply by adding offline to true
	in react_super_script in package.json
       ```js
        {
		    ...

		     "react_super_scripts": {
			  "offline": true
		     }
        }
      ```
	* **Note**: You would also need to require offline plugin in your app entry point. it is always
	recommended to do so for production build.
	At the end of your app entry file just add these lines of code.
       ```js
        // src/index.js
		    ...

		     if (process.env.NODE_ENV === 'production') {
		          require('offline-plugin/runtime').install();
		     }

      ```

### Babel
* **Custom babel config**
	* Want to use latest and greatest of javascript, no worries
		include custom babel presets by installing packages
		and adding them to **.babelrc** in root directory of the app
	* **Note**: This will completly override existing presets.
		You will need to create the .babelrc file inside your app folder
		and remember to add **react-hmre** preset to babel development.
		This script relies on react-hmre for hot module replacement.

### ESLint
* **Custom eslint config**
	* Not happy with the default linting rules,
		simply include custom eslint by installing packages
		and adding them to **.eslintrc** in root directory of the app
	* **Note**: This will completly override existing linting rules.
		You will need to create the .eslintrc file inside your app folder.

### Preact
* **Using preact instead of react**
	* [Preact](https://github.com/developit/preact) is a fast, 3kB alternative to React, with the same ES2015 API,
	* In your package.json add usePreact to react-super-scripts and set it to true.
		Your package.json should look like
		```js
		{
		    ...

		    "react_super_scripts": {
		        "usePreact": true
		    }
		}
		```
		Then uninstall ```react``` and ```react-dom``` and install ```preact``` and ```preact-compat```
	 ```npm uninstall react react-dom && npm install --save preact preact-compat```
	* You can keep using you existing react code without any changes, under the hood
		webpack will alias react and react-dom to use preact.
	* **Note**: This package uses ```preact-compat``` for maintaining compatibility with react.
		This doesn't guarantee complete compatibility, test all features fully first.

### Others
* **Custom port**
	* You can specify custom port for running development server.
	* In your package.json specify the port number to port property
		of react_super_scripts field.
	Your package.json should look like
       ```js
        {
		    ...

		     "react_super_scripts": {
			  "port": 3000
		     }
        }
      ```
	     a default port (3000) is already provided in package.json.
	* **Note**: if you have specified PORT in your environment variable
	then environment variable will override your custom port from package.json.
	Also if you don't provide port in your package.json and nor in your environment variable it will default to 3000.

* **Custom entry point**
	* You can specify app entry point for webpack.
	* In your package.json specify the file path to appEntry property
		of react_super_scripts field.
	Your package.json should look like
       ```js
        {
		    ...

		     "react_super_scripts": {
			  "appEntry": "src/index.js"
		     }
        }
      ```
	     a default entry point (src/index.js) is already provided in package.json.
	* **Note**: if you don't provide appEntry in your package.json it will default to scr/index.js

* **Custom development browser**
	* You can specify your browser for automatically running during development.
	* In your package.json specify the browser to defaultBrowser property
		of react_super_scripts field.
	Your package.json should look like
       ```js
        {
		    ...

		     "react_super_scripts": {
			  "defaultBrowser": "firefox"
		     }
        }
      ```
	* The available options are **chrome**, **firefox**, **safari** (OSX/macOS only) and **ie** (windows only).
        You can also specify it as "none", if you don't want any browser to be running.    
	* **Note**: If you provide a browser that is not available on your system
	it will not run any browser
