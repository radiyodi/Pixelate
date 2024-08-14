export {toggle, clear};

var tabKeyPrefix = 'pixelate-enabled-tab' + '-'

function toggle(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTabId = tabs[0].id;
        var activeTabKey = tabKeyPrefix + activeTabId;
        console.log("getting state for key " + activeTabKey);
        chrome.storage.session.get([activeTabKey], function(data) {
            chrome.scripting.insertCSS({
                target: { tabId: activeTabId },
                files: [data[activeTabKey] ? "styleoff.css" : "style.css"]
            })
            chrome.storage.session.set({[activeTabKey]: data[activeTabKey] ? false : true}, function() {
                console.log("image-rendering is " + (data[activeTabKey] ? "auto" : "pixelated"));
            });
        });
    });
}

function clear(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTabId = tabs[0].id;
        var activeTabKey = tabKeyPrefix + activeTabId;
        console.log("clearing state for key " + activeTabKey);
        chrome.storage.session.remove([activeTabKey]);
    });
}
