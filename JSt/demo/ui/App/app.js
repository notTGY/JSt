import SVGS from '../svgs.js'
import framework from './framework.js'


export default function app(
  getRoomId, setRoomId, vid
) {
  const SpeedUp = () => {
    return {
      elem: 'button',
      className: 'JSt-button',
      text: SVGS.speedUp,
      click: e => {
        if (vid.playbackRate < 20)
          vid.playbackRate += .25
      },
    }
  }
  const SpeedDown = () => {
    return {
      elem: 'button',
      className: 'JSt-button',
      text: SVGS.speedDown,
      click: e => {
        if (vid.playbackRate > .25)
          vid.playbackRate -= .25
      },
    }
  }
  const Bug = () => {
    return {
      elem: 'button',
      className: 'JSt-button',
      text: SVGS.bug,
      click: e => {
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
      text: SVGS.share,
      click: e => {
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
      submit: e => {
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
      },
      text: `
        <input
          minlength=6
          maxlength=6
          required
          autofocus
          id="JSt-code-input"
          placeholder="______"
          value=${getRoomId() ?? ''}
        ></input>
      `,
      children: [
        {
          elem: 'button',
          className: 'JSt-button',
          text: SVGS.checkmark,
        }
      ]
    }
  }
  let screen = 'default'
  const JSt = () => {
    return {
      elem: 'button',
      className: 'JSt-button JSt-button-padding',
      text: SVGS.jstBlack,
      click: e => {
        if (screen === 'default') {
          screen = 'code'
        } else if (screen === 'code') {
          screen = 'default'
        }
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

  const App = () => ([
    {
      elem: 'div',
      className: 'JSt-button-container',
      children: Buttons()
    },
    {
      elem: 'span',
      className: 'JSt-version',
      text: (
        typeof __version === 'undefined'
          ? `dev`
          : `alpha ${__version}`
      ),
    },
  ])

  const rerender = framework(
    document.querySelector('#JSt-pill'), App
  )
}
