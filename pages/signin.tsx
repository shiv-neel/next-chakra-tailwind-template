import { Box, Button, Heading } from '@chakra-ui/react'
import React from 'react'
import { useAuth } from '../auth/user'

const Signin = () => {
	const googleSignIn = useAuth().googleSignIn
	return (
		<Box>
			<Heading as='h1'>Sign In</Heading>
			<Button onClick={googleSignIn}>Sign in with Google</Button>
		</Box>
	)
}

export default Signin
