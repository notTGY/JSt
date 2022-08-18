import styles from './Landing.module.css'
import JStPill from 'src/components/JStPill'
import Blobs from 'src/components/Blobs'
import SubscribeForm from 'src/components/SubscribeForm'
import OneStepAway from 'src/components/OneStepAway'
import Embed from 'src/components/Embed'

type Props = {
  classes?: Record<string,string>,
  embed: string,
}

const LandingComponent = (props: Props) => {
  const { classes, embed } = props
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
      <JStPill classes={classes}>
        <h1 className={styles.h1}>JSt</h1>
      </JStPill>
      <OneStepAway 
        className={styles.marginTop}
      />
      <Embed 
        className={
          `${styles.marginTop} ${styles.marginBottom}`
        }
        embed={embed}
      />
    </main>
  )
}

export default LandingComponent

