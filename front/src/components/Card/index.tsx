import { ReactNode } from 'react'
import styles from './Card.module.css'

type CardProps = {
  children: ReactNode,
  className?: string,
  style?: string,
}

const Card = (props: CardProps) => {
  const { children, className, style } = props
  if (style && style === 'glassmorphism') {
    const cn = `${className} ${styles.card}`

    return (
      <div className={styles.container}>
        <div className={cn}>
          {children}
        </div>
      </div>
    )
  }

  const cn = `${className} ${styles.claycard}`

  return (
    <div className={styles.container}>
      <div className={cn}>
            {children}
      </div>
    </div>
  )
}

export default Card

