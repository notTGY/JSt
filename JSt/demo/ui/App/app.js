import SVGS from '../svgs.js'
import framework from './framework.js'


export default function app(
  getRoomId, setRoomId, vid
) {
  const root = document.querySelector('#JSt-pill')

  const SpeedUp = () => {
    return {
      elem: 'button',
      className: 'JSt-button',
      innerHTML: SVGS.speedUp,
      onclick: e => {
        if (vid.playbackRate < 20)
          vid.playbackRate += .25
      },
    }
  }
  const SpeedDown = () => {
    return {
      elem: 'button',
      className: 'JSt-button',
      innerHTML: SVGS.speedDown,
      onclick: e => {
        if (vid.playbackRate > .25)
          vid.playbackRate -= .25
      },
    }
  }
  const Bug = () => {
    return {
      elem: 'button',
      className: 'JSt-button',
      innerHTML: SVGS.bug,
      onclick: e => {
        window.open(
          'https://jstplayer.com/feedback?from=app',
          '_blank',
        )
      },
    }
  }
  const Share = () => {
    return {
      elem: 'button',
      className: 'JSt-button',
      innerHTML: SVGS.share,
      onclick: e => {
        const link = window.location
        window.open(
          `https://jstplayer.com/watch?v=${link}`,
          '_blank',
        )
      },
    }
  }
  const CodeForm = () => {
    return {
      elem: 'form',
      className: 'JSt-form',
      onsubmit: e => {
        e.preventDefault()
        const id = document
          .querySelector('#JSt-code-input')
          .value
          .toUpperCase()
        setRoomId(id)
        const mover = document.querySelector('#Jitsi-mover')
        if (mover) mover.hidden = false
        const jitsi = document.querySelector('#Jitsi-meet')
        if (jitsi) {
          jitsi.hidden = false
          jitsi.src=`https://meet.jit.si/JSt/${id}`
        }
        rerender()
      },
      children: [
        {
          elem: 'input',
          minLength: 6,
          maxLength: 6,
          required: true,
          autofocus: true,
          id: 'JSt-code-input',
          placeholder: '______',
          value: getRoomId() ?? '',
        },
        {
          elem: 'button',
          className: 'JSt-button',
          innerHTML: SVGS.checkmark,
        }
      ]
    }
  }
  let screen = 'default'
  const JSt = () => {
    return {
      elem: 'button',
      className: 'JSt-button JSt-button-padding',
      innerHTML: SVGS.jstBlack,
      onclick: e => {
        if (screen === 'default') {
          screen = 'code'
        } else if (screen === 'code') {
          screen = 'default'
        }
        rerender()
      },
    }
  }
  const Buttons = () => {
    switch (screen) {
      case 'default':
        return [
          JSt(), SpeedDown(), SpeedUp(), Share()
        ]
      case 'code':
        return [
          JSt(), CodeForm()
        ]
    }
  }

  const App = () => ({
    elem: 'section',
    children: [
      {
        elem: 'div',
        className: 'JSt-button-container',
        children: Buttons()
      },
      {
        elem: 'span',
        className: 'JSt-version',
        innerHTML: (
          typeof __version === 'undefined'
            ? `dev`
            : `alpha ${__version}`
        ),
      },
    ],
  })

  const rerender = framework.init(
    root, App
  )
}
