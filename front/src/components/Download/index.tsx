import Image from 'next/image'
import styles from './Download.module.css'
import Card from 'src/components/Card'

const cardHeader = `
How to install JSt (Desktop)
`

const firstP = `
It's quite easy - just drag pill onto bookmarks bar, like shown on the gif below.
`

const secondP = `
To activate JSt click bookmark on the video page (like on second gif).
`

const thirdP = `
If bookmarks bar is not showing, you can turn it on at Browser settings -> Appearance -> Show bookmars bar -> ✅.
`

type DownloadProps = {
  className?: string,
}

const Download = (props: DownloadProps) => {
  const { className } = props

  return (
    <Card className={`${styles.card} ${className}`} style="glassmorphism">
        <h2 className={styles.h2}>
          {cardHeader}
        </h2>
        <p>
          {firstP}
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
        <p>
          {thirdP}
        </p>
    </Card>
  )
}

export default Download

