import Image from 'next/image'
import styles from './OneStepAway.module.css'
import Card from 'src/components/Card'

const cardHeader = `
One step away from watching with friends!
`

const firstP = `
It's quite easy - just drag pill onto bookmarks bar, like shown on the gif below.
`

const secondP = `
To activate JSt click bookmark on the video page (like on second gif).
`

const smallP = `
If bookmarks bar is not showing, you can turn it on at Browser settings -> Appearance -> Show bookmars bar -> ✅.
`

type OneStepAwayProps = {
  className?: string,
}

const OneStepAway = (props: OneStepAwayProps) => {
  const { className } = props

  return (
    <Card className={`${styles.card} ${className}`}>
        <h2 className={styles.h2}>
          {cardHeader}
        </h2>
        <p>
          {firstP}
        </p>
        <p>
          <small>
            {smallP}
          </small>
        </p>
        <Image
          src="/download.gif"
          width="800"
          height="200"
          className={styles.picture}
          alt="Downloading JSt by dragging pill onto bookmarks bar"
        />
        <p>
          {secondP}
        </p>
        <Image
          src="/use.gif"
          width="800"
          height="250"
          className={styles.picture}
          alt="Using JSt player on youtube"
        />
    </Card>
  )
}

export default OneStepAway

