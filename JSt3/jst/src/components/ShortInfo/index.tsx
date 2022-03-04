import styles from './ShortInfo.module.css'
import Card from 'src/components/Card'
const cardHeader = `
Плеер для совместного просмотра видео.
`

const cardText = `
JSt предоставляет синхронный просмотр любого видео в интернете с минимальной задержкой. 🎥
Также можно ускоряться до произвольной скорости (🏎️преодолеть барьер x2).
Дизайн можно составить из пяти эргономичных цветов, трёх вариаций для размера и эффекта свечения! 🖌️🎨
`

type ShortInfoProps = {
  className?: string,
}

const ShortInfo = (props: ShortInfoProps) => {
  const { className } = props

  return (
    <Card className={`${styles.card} ${className}`}>
        <h2 className={styles.h2}>
          {cardHeader}
        </h2>
        {
          cardText
            .split('\n')
            .map(item => ({__html: item}))
            .map((item, i) =>
              <p
                key={i}
                dangerouslySetInnerHTML={item}
              />
            )
        }
    </Card>
  )
}

export default ShortInfo

