import { Box, Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
	return (
		<Box className='mx-48'>
			<Heading as='h1' py={10}>
				Hello Next.js
			</Heading>
		</Box>
	)
}

export default Home
