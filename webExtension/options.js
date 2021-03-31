function Selector(fatherElement, type, propertyName, setter, defaultValue) {
  const container = document.createElement('div')
  container.classList.add('container')
  const input = document.createElement('input')

  input.value = defaultValue

  input.classList.add('prop-input')

  container.innerText = `${propertyName}: `

  container.append(input)

  fatherElement.append(container)

  if (type == 'color') {
    input.type = 'color'
  }

  input.onchange = e => {
    setter(input.value)
  }
}


const root = document.querySelector('#root')


chrome.storage.sync.get(null, e => {
  const {
    backgroundColor,
    controlsColor,
    animationColor,
    animationBackgroundColor,
    titleColor,
    interfaceColor,
    interfaceBackgroundColor,
    timebarColor
  } = e

  const backgroundColorChooser = new Selector(
    root,
    'color',
    'background color',
    e => chrome.storage.sync.set({backgroundColor: e}, () => {}),
    backgroundColor
  )

  const controlsColorChooser = new Selector(
    root,
    'color',
    'controls color',
    e => chrome.storage.sync.set({controlsColor: e}, () => {}),
    controlsColor
  )

  const animationColorChooser = new Selector(
    root,
    'color',
    'animation color',
    e => chrome.storage.sync.set({animationColor: e}, () => {}),
    animationColor
  )

  const animationBackgroundColorChooser = new Selector(
    root,
    'color',
    'animation background color',
    e => chrome.storage.sync.set({animationBackgroundColor: e}, () => {}),
    animationBackgroundColor
  )

  const titleColorChooser = new Selector(
    root,
    'color',
    'title color',
    e => chrome.storage.sync.set({titleColor: e}, () => {}),
    titleColor
  )

  const interfaceColorChooser = new Selector(
    root,
    'color',
    'interface color',
    e => chrome.storage.sync.set({interfaceColor: e}, () => {}),
    interfaceColor
  )

  const interfaceBackgroundColorChooser = new Selector(
    root,
    'color',
    'interface background color',
    e => chrome.storage.sync.set({interfaceBackgroundColor: e}, () => {}),
    interfaceBackgroundColor
  )

  const timebarColorChooser = new Selector(
    root,
    'color',
    'timebar color',
    e => chrome.storage.sync.set({timebarColor: e}, () => {}),
    timebarColor
  )
})