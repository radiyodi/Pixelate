function toggle(element){
    chrome.storage.sync.get('flag', function(data) {
        if(data.flag == "off"){
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.insertCSS(
                    tabs[0].id,
                    {file: 'style.css'});
            });
            chrome.storage.sync.set({'flag': 'on'}, function() {
                console.log("image-rendering is pixelated");
            });
        }
        else{
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.insertCSS(
                    tabs[0].id,
                    {file: 'styleoff.css'});
            });
            chrome.storage.sync.set({'flag': 'off'}, function() {
                console.log("image-rendering is auto");
            });
        }
    });
}

