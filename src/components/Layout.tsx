import React from 'react'

import { Flex } from 'theme-ui'

const Layout: React.FC = ({ children }) => {
  return (
    <Flex
      sx={{
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background:
          'linear-gradient(45deg, rgba(0,140,90,0.4948354341736695) 0%, rgba(0,140,90,1) 73%)',
        padding: '1em',
      }}
    >
      {children}
    </Flex>
  )
}

export default Layout
