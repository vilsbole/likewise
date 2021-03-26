import React from 'react'
import { useCopyToClipboard } from 'react-use'
import toast from 'toasted-notes'
import 'toasted-notes/src/styles.css'

import { Layout, Box } from '../components'

export default function Home() {
  const [, copyToClipboard] = useCopyToClipboard()

  const email = `office${'@'}likewise.${'at'}`
  const emailReversed = `ta.esiwekil@eciffo`
  const handleClick = () => {
    copyToClipboard(email)
    toast.notify(`${email} copied to clipboard`, {
      position: 'bottom',
    })
  }

  return (
    <Layout>
      <h1>Likewise Invest</h1>
      <a href="#" onClick={handleClick}>
        <Box
          sx={{
            display: 'inline',
            unicodeBidi: 'bidi-override',
            direction: 'rtl',
          }}
        >
          {emailReversed}
        </Box>
      </a>
      {/* <p>&#128679; under construction</p> */}
    </Layout>
  )
}
