import { useState } from 'react'
import Component from './LandingComponent'

const defaultClasses = {
  'dimensions': 'normal',
  'color': 'white',
}

type LandingProps = { }

const Landing = (props: LandingProps) => {
  const [
    classes, setClasses
  ] = useState(defaultClasses)

  return (
    <Component classes={classes} />
  )
}

export default Landing

