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

  color: #b863de;
  background: linear-gradient(155deg, #fbf3ff, #f4e0ff);
  box-shadow: 1px 1px 15px 2px #f4e0ff,
    inset 4px 4px 15px 2px #d4c0df,
    inset -4px -4px 15px 2px #d0abdf;

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
  color: #b863de;
  background: transparent;
  z-index: 500;
  transition: 0.2s;
  opacity: ${uiOpacity};
  cursor: pointer;
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
  color: #b863de;
  font-weight: 600;
  font-family: monospace;
  font-size: ${halfHeight}px;
}

#JSt-code-input::placeholder {
  color: #b863de;
}

.JSt-button:hover {
  color: #a853ce;
  padding: 5px;
}

.JSt-button:active {
  color: #9843be;
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

  color: #b863de;
  font-family: monospace;
  font-size: 0.6rem;
}

.JSt-iframe-button {
  position: absolute!important;
  background: transparent;
  border: 2px solid #e090df;
  box-shadow: 0 0 10px 4px #e090df;
}

#Jitsi-meet{
  position: fixed;
  top: 200px;
  left: 10px;
  width: 400px;
  height: 400px;
  border: none;
  opacity: 0.6;
  border-radius: 10px;
  user-select: none;
}
#Jitsi-mover{
  position: fixed;
  top: 190px;
  left: 0px;
  width: 20px;
  height: 20px;
  background: #fff;
  border: none;
  opacity: 0.6;
  cursor: move;
  border-radius: 5px;
}
`

  const style = document.createElement('style')
  style.innerHTML = sheet
  document.head.append(style)
}

export default generateStylesheet

