console.log("inside bg script");

chrome.tabs.onActivated.addListener(function (activeInfo) {
  var tabId = activeInfo.tabId;
  chrome.tabs.get(tabId, function(tab) {
    // get current tab
    if (tab.url) {
      if (tab.url.endsWith(".pdf")) {
        chrome?.action?.setIcon({ path: "../logoActive.png" });
      } else {
        chrome?.action?.setIcon({ path: "../logoIn.png" });
      }
    }
  });
  // listen to changes in tab URL
  chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (activeInfo.tabId === tabId && changeInfo.url) {
      console.log(`URL has changed to ${changeInfo.url}`);
      if (changeInfo.url.endsWith(".pdf")) {
        chrome?.action?.setIcon({ path: "../logoActive.png" });
      } else {
        chrome?.action?.setIcon({ path: "../logoIn.png" });
      }
    }
  })
});

/* eslint-disable no-undef */
chrome?.runtime?.onMessage?.addListener(function (msg, sender, sendResponse) {
  if (msg.action === "updateIcon") {
    if (msg.value) {
      chrome?.action?.setIcon({ path: "../logoIn.png" });
    } else {
      chrome?.action?.setIcon({ path: "../logoIn.png" });
    }
  }
});
