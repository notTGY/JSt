import { useEffect, useState } from 'react'
import Landing from 'src/components/Landing'
import JstCodeContext from 'src/contexts/JstCode'


type HomeProps = {
  jstCode: string,
}

const Home = (props: HomeProps) => {
  const { jstCode } = props

  return (
    <JstCodeContext.Provider value={jstCode}>
      <Landing />
    </JstCodeContext.Provider>
  )
}

import fs from 'fs'
import path from 'path'
export function getStaticProps() {
  const file = path.resolve(
    __dirname, '../../../../JSt/index.js'
  )
  const jstCode = fs.readFileSync(file, 'utf8')
  return { props: { jstCode } }
}

export default Home

