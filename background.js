
chrome.tabs.onActivated.addListener(function(activeInfo) {
    chrome.tabs.get(activeInfo.tabId, function(tab) {
      updateBadgeText(tab.url);
    });
  });
  
  function updateBadgeText(currentUrl) {
    chrome.history.search({text: currentUrl}, function(historyItems) {
      // Count the number of visits to the current page
      var numVisits = historyItems.length;
  
      // Update the badge text with the number of visits
      chrome.action.setBadgeText({text: numVisits.toString()});
    });
  }