const getTweets = require('../../../server/routes/getTweets')

describe('GET /tweets', function(){
  it('should return a response with an array of my last 100 tweets', function (done) {
    const OAuth = require('oauth')
    const oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.TWITTER_CONSUMER_KEY,
      process.env.TWITTER_CONSUMER_SECRET,
      '1.0A',
      null,
      'HMAC-SHA1'
    )
    oauth.get(
      'https://api.twitter.com/1.1/statuses/user_timeline.json?count=100',
      process.env.TWITTER_ACCESS_TOKEN_KEY,
      process.env.TWITTER_ACCESS_TOKEN_SECRET,
      (e, data, res) => {
        if (e) throw e
        expect(JSON.parse(data)).to.be.instanceOf(Array)
        done()
      }
    )
  })
})
