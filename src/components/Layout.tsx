import React from 'react'

import { Flex } from 'theme-ui'

const Layout: React.FC = ({ children }) => {
  return (
    <Flex
      sx={{
        flexDirection: 'column',
        height: '100%',
        background:
          'linear-gradient(45deg, rgba(0,140,90,0.4948354341736695) 0%, rgba(0,140,90,1) 73%)',
        padding: '1em',
      }}
    >
      <Flex
        sx={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </Flex>
      <Flex
        id="footer"
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          // color: '#ffebd6',
          fontSize: '0.8em',
        }}
      >
        <div>
          Likewise Invest GmbH FN 518257v <br />
          Reichsratsstraße 11/5 1010 Wien
        </div>
      </Flex>
    </Flex>
  )
}

export default Layout
