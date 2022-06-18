import { useState, BaseSyntheticEvent } from 'react'
import Card from 'src/components/Card'
import styles from './SubscribeForm.module.css'

const formHeader = 'Subscribe to newsletter'
const emailLabel = 'Email: '
const emailPlaceholder = 'email@email.com*'
const sendText = 'sub'

const loadingText = 'In the process of subscribing...'

const successText = 'Everything went well 👍. You can share this page, if you want 😉'
const shareText = 'share'

const failText = 'Something went wrong, try entering another email address 🙏'
const tryAgainText = 'try again'

const shareData = {
  title: 'JSt',
  text: 'JSt - video share player',
  url: 'https://jstplayer.com?from=sub_share',
}

type SubscribeFormProps = {
  className?: string,
}

const SubscribeForm = (props: SubscribeFormProps) => {
  const { className } = props

  const [ email, setEmail ] = useState('')
  const [ state, setState ] = useState('input')
  function submit(e: BaseSyntheticEvent) {
    e.preventDefault()

    const domain = 'https://jst--newsletter.nottgy.autocode.gg'
    const api = ''
    const params = `email=${email}`
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

