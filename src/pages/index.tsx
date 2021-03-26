import React from 'react'
import { useCopyToClipboard } from 'react-use'
import toast from 'toasted-notes'
import 'toasted-notes/src/styles.css'

import { Layout, Box, Logo } from '../components'

export default function Home() {
  const [, copyToClipboard] = useCopyToClipboard()

  const email = `office${'@'}likewise.${'at'}`
  const emailReversed = `ta.esiwekil@eciffo`
  const handleClick = () => {
    copyToClipboard(email)
    toast.notify(
      () => {
        return (
          <Box
            sx={{
              backgroundColor: '#e197a6',
              padding: '1.5em',
              borderRadius: '3px',
            }}
          >{`${email} copied to clipboard`}</Box>
        )
      },
      {
        position: 'bottom',
      }
    )
  }

  return (
    <Layout>
      <Box padding={['1em', '0']}>
        <Logo />
      </Box>
      <Box mt="2em" sx={{ textAlign: 'center' }}>
        <span>
          Our online service is coming soon. <br />
          If you‘re impatient, you can reach us at
        </span>
        <br />
        <span onClick={handleClick}>
          <Box
            sx={{
              cursor: 'pointer',
              color: '#ffebd6',
              display: 'inline',
              unicodeBidi: 'bidi-override',
              direction: 'rtl',
            }}
          >
            {emailReversed}
          </Box>
        </span>
        <br />
      </Box>
      {/* <p>&#128679; under construction</p> */}
    </Layout>
  )
}
