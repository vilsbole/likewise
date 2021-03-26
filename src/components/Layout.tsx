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
      }}
    >
      {children}
    </Flex>
  )
}

export default Layout
