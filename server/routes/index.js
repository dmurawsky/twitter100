const getOauthRequest = require('./getOauthRequest')
const getTweets = require('./getTweets')
const postConnect = require('./postConnect')
const postDisconnect = require('./postDisconnect')

const routes = app => {
  app.get('/oauth_request', getOauthRequest)
  app.get('/tweets', getTweets)
  app.post('/connect', postConnect)
  app.post('/disconnect', postDisconnect)
}

module.exports = routes
