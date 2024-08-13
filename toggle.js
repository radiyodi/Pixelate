export default toggle;

function toggle(element){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTabId = tabs[0].id;
        var activeTabKey = 'pixelate-enabled-tab' + '-' + activeTabId;
        console.log("getting data for key " + activeTabKey);
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
