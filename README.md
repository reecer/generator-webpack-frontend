generator-webpack-frontend
==========================
Simple [Yeoman](http://yeoman.io) generator wielding [Webpack](http://webpack.github.io/), [ReactJs](http://facebook.github.io/react/), and [Sass](http://sass-lang.com).
> __Warning__:
> This is an on-going experiment for me to refine a frontend [SPA](http://en.wikipedia.org/wiki/Single-page_application) architecture.
> As such, this project is subject to random and breaking changes and backwards compatability should never be expected.

File Structure
==============
  
	├── build/
	│   ├── *.js (built by webpack)
	│   └── index.html
	├── client/
	│   ├── routes.js
	│   ├── components/
	│   ├── pages/
	│   └── stylesheets/
	├── package.json
	└── webpack.config.js

Installation
============

Install with npm:

```bash
npm install -g generator-webpack-frontend
```

Usage
=====

### Init
Creates the file structure above in the current directory.
```bash
yo webpack-frontend
```

> You can skip the npm install with the `--skip-install` flag.


### Add Page
Create a jsx page with a corresponding stylesheet.
```bash
yo webpack-frontend:page NewPage
```

__client/pages/NewPage.jsx__
```js
var React = require('react');
var PageMixin = require('../router').PageMixin;

require('../stylesheets/NewPage.scss');

class NewPage extends PageMixin {
  render() {
    return (
      <div className="NewPage">
        <h1>NewPage</h1>
      </div>
    );
  }
}

module.exports = NewPage;

```

__client/stylesheets/NewPage.scss__
```scss
.NewPage.Page {
	/* SCSS */
}
```

#### Setup Route
In order for a page to be rendered, a route must be configured:

__client/routes.js__
```js
/**
 * Frontend routes.
*/
module.exports = {

  HOME: {
    path: '/',
    load: (fn) => require.ensure([], () => fn(require('./pages/HomePage')))
  },

  NEW_PAGE: {
    path: '/new',
    load: (fn) => require.ensure([], () => fn(require('./pages/NewPage')))
  },

  NOT_FOUND: {
    path: '*',
    load: (fn) => require.ensure([], () => fn(require('./pages/404Page')))
  }
};
```

### Add Component
Create a jsx component with a corresponding stylesheet.

```bash
yo webpack-frontend:component NewComponent
```


__client/components/NewComponent.jsx__
```js
'use strict'

var React = require('react');

require('../stylesheets/NewComponent.scss');

class NewComponent extends React.Component {
  render() {
    return (
      <div>
        NewComponent
      </div>
    );
  }
}

module.exports = NewComponent;
                                ```

__client/stylesheets/NewComponent.scss__
```scss
.NewComponent {
	/* SCSS */
}
```


Building/Development
====================
Use webpack to build. Watch with ```-w```.

```bash
webpack -w
```

> Builds to __build/*.js__ by default.


TODO
====
_API Docs for `RouterMixin` and `PageMixin`._

License
=======
MIT
