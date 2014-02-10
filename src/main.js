
var Twitter = require('../node_modules/twit/lib/twitter')
  , config = require('../twitter_config.js');

twit = new Twitter(config);


// twit.get("statuses/user_timeline", {
//   screen_name: "LewisBrosFood",
//   count: 1
//   }, function (err, reply) {
//   if(err) return handleError(err);
//   console.log('\nStatuses - LewisBrosFood: ');
//   console.log(reply[0].text);
// })


console.log('Follow Truck: Starting.');
stream = twit.stream("user")

console.log('Follow Truck: Stream created.');

stream.on("tweet", function (tweet) {
  console.log("A new tweet appeared:");
  console.log("From: " + tweet.user.screen_name);
  console.log("Text:\n " + tweet.text);
})

console.log('Listening...');
