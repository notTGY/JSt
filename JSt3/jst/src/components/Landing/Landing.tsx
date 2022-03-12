import { useState } from 'react'
import A from './A'
import B from './B'

const defaultClasses = {
  'dimensions': 'normal',
  'borderWidth': '4px',
  'color': 'white',
}

type LandingProps = {
  landingType?: string,
}

const Landing = (props: LandingProps) => {
  const { landingType } = props
  const [
    classes, setClasses
  ] = useState(defaultClasses)

  console.log(landingType)

  if (landingType === 'A')
    return (
      <A
        landingType={landingType}
        classes={classes}
      />
    )
  if (landingType === 'B')
    return (
      <B
        landingType={landingType}
        classes={classes}
      />
    )


  return (
    <A
      landingType={landingType}
      classes={classes}
    />
  )
}

export default Landing

