import Image from 'next/image'
import styles from 'styles/Home.module.css'

const altText = `JSt3 logo`

const AnimationIntro = () => {
  return (
    <div className={styles.blackdrop}>
      <div className={styles.icon}>
      <Image
        priority
        src="/jst-gold.svg"
        width="500"
        height="500"
        alt={altText}
      />
      </div>
    </div>
  )
}

export default AnimationIntro

