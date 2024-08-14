import {toggle, clear} from "./toggle.js";

chrome.action.disable();
chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {schemes: ['*','http','https','file','ftp']}
        })],
        actions: [new chrome.declarativeContent.ShowAction()]
    }]);
});

chrome.commands.onCommand.addListener(function(command) {
    if(command == "toggle"){    
        toggle();
    }
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == "complete") {
        clear();
    }
});