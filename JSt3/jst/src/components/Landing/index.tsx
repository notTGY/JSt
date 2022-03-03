import { useState } from 'react'
import styles from './Landing.module.css'
import JStPill from 'src/components/JStPill'
import Card from 'src/components/Card'

const defaultClasses = {
  'dimensions': 'normal',
  'borderWidth': '4px',
  'color': 'white',
}

const firstCardHeader = `
Плеер для совместного просмотра видео.
`

const firstCardText = `
текст
`

const Landing = () => {
  const [
    classes, setClasses
  ] = useState(defaultClasses)

  const jstCode = 'javascript:alert()'

  return (
    <main
      className={styles.backdrop}
    >
      <a href={jstCode}>
        <JStPill classes={classes}>
          <h1 className={styles.h1}>JSt3</h1>
        </JStPill>
      </a>
      <div></div>
      <Card>
        <h2 className={styles.h2}>
          {firstCardHeader}
        </h2>
        <p>
          {firstCardText}
        </p>
      </Card>
    </main>
  )
}

export default Landing

