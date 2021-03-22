chrome.browserAction.onClicked.addListener(tab => {
  chrome.tabs.sendMessage(tab.id, {message: 'open popup'})
})

chrome.contextMenus.create({
    title: "JSt",
    "contexts": ["all"],
    onclick: (info, tab) => {
      chrome.tabs.sendMessage(tab.id, {message: 'open popup', url: info.src})
    }
  }, () => {
  }
)


chrome.storage.sync.get(null, e => {
  console.log(e)
  if (e.backgroundColor === undefined) {
    chrome.storage.sync.set({backgroundColor: '#333'}, () => {})
  }
  if (e.controlsColor === undefined) {
    chrome.storage.sync.set({controlsColor: '#fff'}, () => {})
  }
  if (e.animationColor === undefined) {
    chrome.storage.sync.set({animationColor: '#fff'}, () => {})
  }
  if (e.animationBackgroundColor === undefined) {
    chrome.storage.sync.set({animationBackgroundColor: '#333'}, () => {})
  }
  if (e.titleColor === undefined) {
    chrome.storage.sync.set({titleColor: '#fff'}, () => {})
  }
  if (e.interfaceColor === undefined) {
    chrome.storage.sync.set({interfaceColor: '#fff'}, () => {})
  }
  if (e.interfaceBackgroundColor === undefined) {
    chrome.storage.sync.set({interfaceBackgroundColor: '#333'}, () => {})
  }
  if (e.timebarColor === undefined) {
    chrome.storage.sync.set({timebarColor: 'blue'}, () => {})
  }
})