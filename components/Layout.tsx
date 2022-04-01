import { Box } from '@chakra-ui/react'
import React, { Children } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout: React.FC = ({ children }) => {
	return (
		<Box>
			<Navbar />
			<Box margin={'0 auto 33%'}>{children}</Box>
			<Footer />
		</Box>
	)
}

export default Layout
