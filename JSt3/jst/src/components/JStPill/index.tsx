import { ReactNode } from 'react'
import JstCodeContext from 'src/contexts/JstCode'
import styles from './JStPill.module.css'

const capitalize = (str: string) =>
  str[0].toUpperCase() + str.substring(1)

type JStPillProps = {
  children: ReactNode,
  classes?: Record<string, string>,
}

const JStPill = (props: JStPillProps) => {
  const { classes, children } = props

  let cn = `${styles.JStPill}`
  if (classes) {
    for (const prop in classes) {
      const value = classes[prop]

      const style = `${prop}${capitalize(value)}`
      cn += ` ${styles[style]}`
    }
  }

  return (
    <JstCodeContext.Consumer>
      {jstCode =>
        <a ref={
          node =>
            node && node.setAttribute('href', `javascript:${jstCode}`)
        }>
          <section className={cn}>
            <div className={styles.JStButtonsContainer}>
            </div>
            <div className={styles.JStMessage}>
              {children}
            </div>
          </section>
        </a>
      }
    </JstCodeContext.Consumer>
  )
}

export default JStPill

