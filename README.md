generator-webpack-frontend
==========================
Simple [Yeoman](http://yeoman.io) generator wielding [Webpack](http://webpack.github.io/), [ReactJs](http://facebook.github.io/react/), and [Sass](http://sass-lang.com).

File Structure
==============

	├── client/
	│   ├── bundle.js (built by webpack)
	│   ├── index.html
	│   ├── components/
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

> You can optionally skip the npm & bower install with the `--skip-install` flag.


### Add Component
Create a jsx component with a corresponding stylesheet.

```bash
yo webpack-frontend:component NewComponent
```


__client/components/NewComponent.jsx__
```js
var React = require('react');
require('../stylesheets/NewComponent.scss');

var NewComponent = React.createClass({
	render: function() {
		return (
			<div className="NewComponent"></div>
		);
	}
});

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

> Builds to client/bundle.js by default.


License
=======

MIT
