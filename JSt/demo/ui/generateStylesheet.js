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

  let dark, light, borderColor, shadowColor,
    color, colorFade, colorDark
  switch(opts.color) {
    case undefined:
    case 'trans':
      shadowColor = '#c8c8c8a0'
      borderColor = '#c8c8c8a0'
      light = '#ffffffa0'
      dark = '#eeeeeea0'
      color = '#e090df'
      colorFade = '#a44cd3'
      colorDark = '#8800c7'
      break;
    case 'white':
      shadowColor = '#ccd'
      borderColor = '#aaa'
      light = '#fff'
      dark = '#bbbbbb'
      color = '#888'
      colorFade = '#555'
      colorDark = '#333'
      break;
    case 'black':
      shadowColor = '#222'
      borderColor = '#333'
      light = '#222222'
      dark = '#000'
      color = '#888'
      colorFade = '#555'
      colorDark = '#333'
      break;
    case 'green':
      shadowColor = '#bfa'
      borderColor = '#7a6'
      light = '#bfa'
      dark = '#8b7'
      color = '#888'
      colorFade = '#555'
      colorDark = '#333'
      break;
    case 'pink':
      shadowColor = '#fab'
      borderColor = '#a67'
      light = '#fab'
      dark = '#b78'
      color = '#888'
      colorFade = '#555'
      colorDark = '#333'
      break;
    case 'blue':
      shadowColor = '#abf'
      borderColor = '#67a'
      light = '#abf'
      dark = '#78b'
      color = '#888'
      colorFade = '#555'
      colorDark = '#333'
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
.JSt-video-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.JSt-video-wrapper>video {
  width: 100%;
  height: 100%;
}

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
  backdrop-filter: blur(15px);

  opacity: ${uiOpacity};
  animation: jst-pill-appear 0.5s;
}

#JSt-pill:hover {
  opacity: 1;
}

@keyframes jst-pill-appear{
  from {
    opacity: 0;
  }
  to {
    opacity: ${uiOpacity};
  }
}

.JSt-button-container {
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

.JSt-form {
  margin: 0;
  display: flex;
  align-items: center;
  z-index: 400;
}

.JSt-button {
  width: ${2*halfHeight}px;
  height: ${2*halfHeight}px;
  border: 0px;
  padding: 20px;
  color: ${color};
  background: transparent;
  z-index: 500;
  transition: 0.2s;
  opacity: ${uiOpacity};
}

.JSt-button-padding {
  padding: 20px!important;
}

#JSt-code-input {
  width: ${4*halfHeight}px;
  height: ${2*halfHeight}px;
  border: 0px;
  padding: 0px;
  padding-bottom: ${halfHeight/2}px;
  padding-top: ${halfHeight/2}px;
  background: transparent;
  z-index: 500;
  transition: 0.5s;
  opacity: ${uiOpacity};
  color: ${color};
  font-weight: 600;
  font-family: monospace;
  font-size: ${halfHeight}px;
}

.JSt-button:hover {
  color: ${colorFade};
  padding: 5px;
}

.JSt-button:active {
  color: ${colorDark};
  padding: 20px;
}

.JSt-version {
  width: ${pillWidth - 2*halfHeight}px;
  height: ${2*halfHeight}px;

  position: relative;
  top: -${2*halfHeight}px;
  margin: 0 auto;

  z-index: 102;

  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;

  color: ${color};
  font-family: monospace;
  font-size: 0.6rem;
}

.JSt-iframe-button {
  position: absolute!important;
  background: transparent;
  border: 2px solid #e090df;
  box-shadow: 0 0 10px 4px #e090df;
}
`

  const style = document.createElement('style')
  style.innerHTML = sheet
  document.head.append(style)
}

export default generateStylesheet

