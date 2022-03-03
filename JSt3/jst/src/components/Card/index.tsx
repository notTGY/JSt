import styles from './Card.module.css'

const Card = (props) => {
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

