import styles from './Embed.module.css'
import Card from 'src/components/Card'
const cardHeader = `
To watch together just click link below \\\/
`

type EmbedProps = {
  className?: string,
  embed: string,
}

const Embed = (props: EmbedProps) => {
  const { className, embed } = props

  return (
    <Card className={`${styles.card} ${className}`}>
        <h2 className={styles.h2}>
          {cardHeader}
        </h2>
        <a href={embed}>
          {embed}
        </a>
    </Card>
  )
}

export default Embed

