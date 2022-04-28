import { Box } from '@chakra-ui/react'
import React, { Children } from 'react'

const Layout: React.FC = ({ children }) => {
	return (
		<Box>
			<Box>{children}</Box>
		</Box>
	)
}

export default Layout
