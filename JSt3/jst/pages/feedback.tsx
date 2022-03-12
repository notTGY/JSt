import { useEffect, useState } from 'react'
import styles from 'src/components/Landing/Landing.module.css'
import Blobs from 'src/components/Blobs'
import Card from 'src/components/Card'

const cardHeader = 'Hi'

const cardText = `
This page is under heavy development,
make sure to check this out next week. 😀
`

const Feedback = () => {
  const BackgroundJsx = (
    <>
      <div className={styles.backdrop}/>
      <div className={styles.backdropOld}/>
      <Blobs/>
    </>
  )
  return (
    <main className={styles.main}>
      {BackgroundJsx}
      <Card
        className={styles.marginTop}
      >
        <h2>{cardHeader}</h2>
        <p>{cardText}</p>
      </Card>
    </main>
  )
}

export default Feedback

