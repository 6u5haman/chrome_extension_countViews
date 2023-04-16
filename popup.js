function updatePageCount() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    let url = tabs[0].url
    var pageCountElement = document.getElementById('page-count');
    chrome.history.getVisits({ url: url }, function(visitItems) {
      var pageCountElement = document.getElementById('page-count');
      count = visitItems.length - 1
      pageCountElement.textContent = 'This is the '+ count +' you open this link';
      chrome.action.setBadgeText({ text: count.toString() });
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  updatePageCount();
  chrome.tabs.onActivated.addListener(updatePageCount);
  chrome.tabs.onUpdated.addListener(updatePageCount);
});