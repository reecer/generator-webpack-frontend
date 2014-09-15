generator-webpack-frontend
==========================
Simple [Yeoman](http://yeoman.io) generating wielding [Webpack](http://webpack.github.io/), [ReactJs](http://facebook.github.io/react/), [Gulp](http://gulpjs.com/), [Sass](http://sass-lang.com), and [Foundation](http://foundation.zurb.com).

## Structure

> ├── bower.json       
> ├── build     		 
> │   ├── bundle.js 	 
> │   └── index.html	 
> ├── gulpfile.js		 
> ├── package.json	 
> ├── src	   			 
> │   ├── components 	 
> │   └── index.html	 
> └── webpack.config.js

## Getting Started

To install generator-webpack-frontend from npm, run:

```bash
npm install -g generator-webpack-frontend
```


Finally, initiate the generator:

```bash
yo webpack-frontend
```

> You can optionally skip the init npm & bower install with the `--skip-install` flag.

## Building
Build all your jsx and scss:

```bash
gulp build
```

> Builds to directory ```build/```.

## Create component

```bash
yo webpack-frontend:component newComponent
```

...generates...

__src/component/newComponent.jsx__

	/**
	* @jsx React.DOM
	*/

	var React = require('react');
	require('./newComponent.scss');
	
	var newComponent = React.createClass({
		render: function() {
			return (
				<div className="newComponent"></div>
			);
		}
	});
	
	module.exports = newComponent;

and

__src/component/newComponent.scss__

	newComponent {
		/* SCSS */
	}



## License

MIT
