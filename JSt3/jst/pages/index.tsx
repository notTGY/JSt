import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import AnimationIntro from 'src/components/AnimationIntro'
import Landing from 'src/components/Landing'

const Home: NextPage = () => {
  const [ isLanding, setIsLanding ] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLanding(true)
    }, 3000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])
  if (!isLanding) return <AnimationIntro/>

  return <Landing/>
}

export default Home

