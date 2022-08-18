import styles from './ShortInfo.module.css'
import Card from 'src/components/Card'
const cardHeader = `
Video sharing player.
`

const cardText = `
JSt provides shared access to every video in the internet with no watching delay. 🎥
Also it lets you speed up unlimetedly (🏎️surpass x2 barrier).
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

