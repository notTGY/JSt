import { useState } from 'react'
import { useRouter } from 'next/router'
import Component from './LandingComponent'

const defaultClasses = {
  'dimensions': 'normal',
  'borderWidth': '4px',
  'color': 'white',
}

type LandingProps = { }

const Landing = (props: LandingProps) => {
  const [
    classes, setClasses
  ] = useState(defaultClasses)

  const router = useRouter()
  const embedArray = router.query.v || ''
  const embed =
    Array.isArray(embedArray)
      ? embedArray[0]
      : embedArray

  return (
    <Component classes={classes} embed={embed} />
  )
}

export default Landing

