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
      <Box>
        <Box
          variant="textStyles.heading"
          sx={{
            fontSize: [6, 7],
            fontFamily: 'Times new roman',
            color: '#ffebd6',
          }}
        >
          Likewise Invest
        </Box>
        <p style={{ marginTop: 0, textAlign: 'center' }}>
          The solution to debtor insolvency
        </p>
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
