function closeZoomTabOnSuccessListener(tabId, changeInfo, tab) {
  if (tab.url.match(/https:\/\/(.+\.|)zoom\.us\/.+(\?|\#)success.*/)) {
    setTimeout(() => {
      chrome.tabs.remove(tabId, _ => chrome.runtime.lastError);
    }, 2000)
  }
}

chrome.tabs.onUpdated.addListener(closeZoomTabOnSuccessListener);
