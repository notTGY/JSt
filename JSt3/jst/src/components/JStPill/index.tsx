import styles from './JStPill.module.css'

const capitalize = str =>
  str[0].toUpperCase() + str.substring(1)

const JStPill = (props) => {
  const { classes, children } = props

  let cn = `${styles.JStPill}`
  console.log(classes)
  if (classes) {
    for (const prop in classes) {
      const value = classes[prop]

      const style = `${prop}${capitalize(value)}`
      console.log(style)
      cn += ` ${styles[style]}`
    }
  }

  return (
    <section className={cn}>
      <div className={styles.JStButtonsContainer}>
      </div>
      <p className={styles.JStMessage}>
        {children}
      </p>
    </section>
  )
}

export default JStPill

