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

fetch(`https://nottgy.api.stdlib.com/yo@dev/?method=path`)
  .then(response => response.json())
  .then(json => {
    if (!json.error) {
      chrome.storage.sync.set({apiURL: json}, () => {})
    } else {
      console.log('server error')
      chrome.storage.sync.set({apiURL: 'error'}, () => {})
    }
  }).catch(e => {
  chrome.storage.sync.set({apiURL: 'error'}, () => {})
})


chrome.storage.sync.get(null, e => {
  console.log(e)
  if (e.backgroundColor === undefined) {
    chrome.storage.sync.set({backgroundColor: '#333333'}, () => {})
  }
  if (e.controlsColor === undefined) {
    chrome.storage.sync.set({controlsColor: '#ffffff'}, () => {})
  }
  if (e.animationColor === undefined) {
    chrome.storage.sync.set({animationColor: '#ffffff'}, () => {})
  }
  if (e.animationBackgroundColor === undefined) {
    chrome.storage.sync.set({animationBackgroundColor: '#333'}, () => {})
  }
  if (e.titleColor === undefined) {
    chrome.storage.sync.set({titleColor: '#ffffff'}, () => {})
  }
  if (e.interfaceColor === undefined) {
    chrome.storage.sync.set({interfaceColor: '#ffffff'}, () => {})
  }
  if (e.interfaceBackgroundColor === undefined) {
    chrome.storage.sync.set({interfaceBackgroundColor: '#333333'}, () => {})
  }
  if (e.timebarColor === undefined) {
    chrome.storage.sync.set({timebarColor: '#3aebca'}, () => {})
  }
})


chrome.runtime.onConnect.addListener(port => {
  if (port.name === 'sending port') {
    port.onMessage.addListener(message => {
      const {apiURL, roomUUID, data} = message
      fetch(`${apiURL}?method=send&room=${roomUUID}&data=${JSON.stringify(data)}`)
        .then(response => response.json())
        .then(json => port.postMessage(json))
    })

  } else if (port.name === 'receiving port') {

    port.onMessage.addListener(message => {
      const {apiURL, roomUUID} = message
      fetch(`${apiURL}?method=get&room=${roomUUID}`)
        .then(response => {console.log(response); return response.json()})
        .then(json => port.postMessage(json))
    })

  }
})  
