import { useEffect, useState } from 'react'
import AnimationIntro from 'src/components/AnimationIntro'
import Landing from 'src/components/Landing'
import JstCodeContext from 'src/contexts/JstCode'


type HomeProps = {
  jstCode: string,
}

const Home = (props: HomeProps) => {
  const { jstCode } = props
  const [ isLanding, setIsLanding ] = useState(false)
  const [
    landingType, setLandingType
  ] = useState('A')

  useEffect(() => {
    const choices = ['A', 'B']
    const rand = Math.random()
    const choice = Math.floor(choices.length * rand)
    setLandingType(choices[choice])

    const timeout = setTimeout(() => {
      setIsLanding(true)
    }, 3000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  if (!isLanding) return <AnimationIntro/>
  return (
    <JstCodeContext.Provider value={jstCode}>
      <Landing
        landingType={landingType}
      />
    </JstCodeContext.Provider>
  )
}

import fs from 'fs'
import path from 'path'
export function getStaticProps() {
  const file = path.resolve(
    __dirname, '../../../../index.js'
  )
  console.log(file)
  const jstCode = fs.readFileSync(file, 'utf8')
  return { props: { jstCode } }
}

export default Home

