import styles from './Landing.module.css'
import JStPill from 'src/components/JStPill'
import Blobs from 'src/components/Blobs'
import SubscribeForm from 'src/components/SubscribeForm'
import ShortInfo from 'src/components/ShortInfo'
import Download from 'src/components/Download'

type Props = {
  landingType?: string,
  classes?: Record<string,string>,
}

const B = (props: Props) => {
  const { landingType, classes } = props
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
      <SubscribeForm
        landingType={landingType}
      />
      <ShortInfo
        className={styles.marginTop}
      />
      <Download
        className={styles.marginTop}
      />
    </main>
  )
}

export default B

