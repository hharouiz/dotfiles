function injectScriptToTab(a,b,c){chrome.scripting.executeScript({target:{tabId:a},files:b},c)};
