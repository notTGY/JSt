function generateStylesheet(opts) {
  let halfHeight, pillWidth
  switch(opts.dimensions) {
    case undefined:
    case 'normal':
      halfHeight = 75
      pillWidth = 800
      break;
    case 'big':
      halfHeight = 85
      pillWidth = 900
      break;
    case 'verybig':
      halfHeight = 100
      pillWidth = 1000
  }

  let dark, light, borderColor, shadowColor
  switch(opts.color) {
    case undefined:
    case 'white':
      shadowColor = '#ccd'
      borderColor = '#aaa'
      light = '#fff'
      dark = '#bbbbbb'
      break;
    case 'black':
      shadowColor = '#222'
      borderColor = '#333'
      light = '#222222'
      dark = '#000'
      break;
    case 'green':
      shadowColor = '#bfa'
      borderColor = '#7a6'
      light = '#bfa'
      dark = '#8b7'
      break;
    case 'pink':
      shadowColor = '#fab'
      borderColor = '#a67'
      light = '#fab'
      dark = '#b78'
      break;
    case 'blue':
      shadowColor = '#abf'
      borderColor = '#67a'
      light = '#abf'
      dark = '#78b'
      break;
  }

  let pillShadow
  switch(opts["border-width"]) {
    case undefined:
    case '4px':
      pillShadow = `box-shadow: 0px 0px 10px 4px;`
      break;
    case '6px':
      pillShadow = `box-shadow: 0px 0px 10px 6px;`
      break;
    case '10px':
      pillShadow = `box-shadow: 0px 0px 10px 10px;`
  }

  const uiOpacity = 0.9

  const sheet = `
#JSt-pill {
  width: ${pillWidth}px;
  height: ${2*halfHeight}px;
  border-radius: ${halfHeight}px;

  position: fixed;
  top: 50px;
  left: calc(50vw - ${pillWidth/2}px);

  overflow: hidden;
  z-index: 100;

  ${pillShadow}
  color: ${shadowColor};

  border: 2px solid ${borderColor};
  background-image:linear-gradient(${light},${dark});

  opacity: ${uiOpacity};
  animation: jst-pill-appear 0.5s;
}

@keyframes jst-pill-appear{
  from {
    opacity: 0;
  }
  to {
    opacity: ${uiOpacity};
  }
}

#JSt-message {
  width: ${pillWidth - 2*halfHeight}px;
  height: ${2*halfHeight}px;

  position: relative;
  top: -${2*halfHeight}px;
  margin: 0 auto;

  z-index: 101;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  color: #333;
  font-family: monospace;
  font-size: ${halfHeight}px;
}

#JSt-button-container {
  margin-top: 0px;
  margin-bottom: 0px;
  margin-left: ${halfHeight}px;

  height: ${2*halfHeight}px;
  width: ${pillWidth - 2*halfHeight}px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  background: transparent;
  z-index: 102;
}

.JSt-button {
  width: ${2*halfHeight}px;
  height: ${2*halfHeight}px;
  border: 0px;
  padding: 20px;
  color: #888;
  background-image:linear-gradient(${light},${dark});
  z-index: 103;
  transition: 0.5s;
  animation: button-appear 0.5s;
  opacity: ${uiOpacity};
}

@keyframes button-appear{
  from {
    opacity: 0;
    padding: ${halfHeight}px;
  }
  to {
    opacity: ${uiOpacity};
    padding: 20px;
  }
}

.JSt-button:hover {
  color: #555;
  padding: 15px;
}

.JSt-button:active {
  color: #333;
  padding: 0px;
}
    `

  return function putStylesheet() {
    const style = document.createElement('style')
    style.innerHTML = sheet
    document.head.append(style)
  }
}

export default generateStylesheet

