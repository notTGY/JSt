import Image from 'next/image'
import styles from './Download.module.css'
import Card from 'src/components/Card'

const cardHeader = `
Как установить JSt (Desktop)
`

const firstP = `
Всё довольно просто - перетащи пилюлю в закладки как показано на первой гифке.
`

const secondP = `
После этого на странице с видео нажми на закладку, чтобы активировать JSt (2 гифка).
`

const thirdP = `
Если панель закладок не отображается, перейди в Настройки браузера -> Внешний вид -> Показывать панель закладок -> ✅.
`

type DownloadProps = {
  className?: string,
}

const Download = (props: DownloadProps) => {
  const { className } = props

  return (
    <Card className={`${styles.card} ${className}`}>
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
        />
        <p>
          {secondP}
        </p>
        <Image
          src="/use.gif"
          width="800"
          height="250"
          className={styles.picture}
        />
        <p>
          {thirdP}
        </p>
    </Card>
  )
}

export default Download

