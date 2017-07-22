# Install Dependancies

```
$ npm install
```

# Build & Run

In order to build & run the app you'll need to [create a Twitter app](https://apps.twitter.com/app/new) and create a `.env` file in the main directory next to this README. You can edit the `.sample-env` file and rename it `.env`. `TWITTER_ACCESS_TOKEN_KEY` and `TWITTER_ACCESS_TOKEN_SECRET` are only required for testing.

```
$ npm start
```

# Test

I wrote didn't use arrow functions `() => {}` with [Mocha doesn't like them](http://mochajs.org/#arrow-functions)

```
$ npm test
```
