# React Tutorial

In your new blank project directory: 

```
npm init
npm install react react-dom --save
npm install babel-loader babel-core babel-preset-es2015 babel-preset-react
touch index.html App.js main.js webpack.config.js
```

Assuming you already have these installed:

```
npm install webpack babel webpack-dev-server -g
```

Give content to these files:

* `webpack.config.js`
* `index.html`
* `App.js`
* `main.js`
* `scripts` part to `package.json`

Run `npm start`.

Now go to [http://localhost:3333](http://localhost:3333).

Change `Hello` to `Hi` in `App.js` and see it refresh automagically upon file save.