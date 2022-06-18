import { ReactNode } from 'react'
import styles from './Card.module.css'

type CardProps = {
  children: ReactNode,
  className?: string,
}

const Card = (props: CardProps) => {
  const { children, className } = props

  const cn = `${className} ${styles.card}`

  return (
    <div className={styles.container}>
      <div className={cn}>
        {children}
      </div>
    </div>
  )
}

export default Card

