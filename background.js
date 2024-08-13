import toggle from "./toggle.js";
chrome.commands.onCommand.addListener(function(command) {
    if(command == "toggle"){    
        toggle();
    }
});