chrome.runtime.onInstalled.addListener(function() {
	chrome.storage.sync.set({'flag': 'off'}, function() {
		console.log("image-rendering is auto");
    });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostContains: '.'},
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
