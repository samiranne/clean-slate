chrome.runtime.onInstalled.addListener(function() {

  chrome.storage.sync.set({'theme_color': '#36465D'}, function() {
    console.log("Theme color is Tumblr classic.");
  });
  chrome.storage.sync.set({'hide_posts': false}, function() {
    console.log("Not hiding other users' posts.");
  });
  chrome.storage.sync.set({'hide_ads': true}, function() {
    console.log("Hiding sponsored content & ads.");
  });
  chrome.storage.sync.set({'hide_feed_notifications': true}, function() {
    console.log("Hiding like/reblog notifications in feed.");
  });
  chrome.storage.sync.set({'hide_radar_sidebar': true}, function() {
    console.log("Hiding radar posts in right sidebar.");
  });
  chrome.storage.sync.set({'hide_explore_sidebar': true}, function() {
    console.log("Hiding 'Explore Tumblr' and recommended blogs in right sidebar.");
  });

  //
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'developer.chrome.com'},
        })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});