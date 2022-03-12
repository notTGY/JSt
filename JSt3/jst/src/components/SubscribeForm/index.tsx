import { useState, BaseSyntheticEvent } from 'react'
import Card from 'src/components/Card'
import styles from './SubscribeForm.module.css'

const formHeader = 'Подписаться на обновления'
const emailLabel = 'Почта: '
const emailPlaceholder = 'email@email.com*'
const sendText = 'подписаться'

const loadingText = 'Подписываемся...'

const successText = 'Всё прошло отлично👍. Если хочешь - можешь поделиться😉'
const shareText = 'поделиться'

const failText = 'Что-то пошло не так, попробуй ввести другую почту 🙏'
const tryAgainText = 'попробовать ещё раз'

const shareData = {
  title: 'JSt',
  text: 'JSt - плеер для совместного просмотра видео',
  url: 'https://jstplayer.com?from=sub_share',
}

type SubscribeFormProps = {
  landingType?: string,
  className?: string,
}

const SubscribeForm = (props: SubscribeFormProps) => {
  const { className, landingType } = props

  const [ email, setEmail ] = useState('')
  const [ state, setState ] = useState('input')
  function submit(e: BaseSyntheticEvent) {
    e.preventDefault()

    const domain = 'https://jst--newsletter.nottgy.autocode.gg'
    const api = ''
    const params = `email=${email}&landing=${landingType}`
    fetch(`${domain}/${api}?${params}`)
      .then(res => {
        setState(res.ok ? 'success' : 'fail')
      })
    setState('loading')
  }

  const FormJsx = (
    <form onSubmit={submit}>
      <h2 className={styles.h2}>
        {formHeader}
      </h2>
      <label htmlFor="email">{emailLabel}</label>
      <input
        required
        type="email"
        name="email"
        id="email"
        placeholder={emailPlaceholder}
        value={email}
        onChange={e => setEmail(e.target.value)}
        className={styles.input}
      ></input>
      <div className={styles.flex}>
        <button className={styles.button}>
          {sendText}
        </button>
      </div>
    </form>
  )

  const LoadingJsx = (
    <>
      <h2 className={styles.h2}>
        {formHeader}
      </h2>
      <p>{loadingText}</p>
    </>
  )

  const SuccessJsx = (
    <>
      <h2 className={styles.h2}>
        {formHeader}
      </h2>
      <p>{successText}</p>
      <div className={styles.flex}>
        <button
          onClick={e => navigator.share(shareData)}
          className={styles.button}
        >{shareText}</button>
      </div>
    </>
  )

  const FailJsx = (
    <>
      <h2 className={styles.h2}>
        {formHeader}
      </h2>
      <p>{failText}</p>
      <div className={styles.flex}>
        <button
          onClick={e => setState('input')}
          className={styles.button}
        >{tryAgainText}</button>
      </div>
    </>
  )
  return (
    <Card className={`${className} ${styles.popup}`}>
      { state === 'input' ? FormJsx : '' }
      { state === 'loading' ? LoadingJsx : '' }
      { state === 'success' ? SuccessJsx : '' }
      { state === 'fail' ? FailJsx : '' }
    </Card>
  )
}

export default SubscribeForm

