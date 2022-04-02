import { Box, Button, Heading } from '@chakra-ui/react'
import React from 'react'
import { useAuth } from '../auth/user'

const Account = () => {
	const user = useAuth().user
	const logout = useAuth().logout
	return (
		<Box className='mx-48'>
			<Heading as='h1' py={10}>
				Account
			</Heading>
			<Box className='flex flex-col w-48 gap-5'>
				<p>{user?.displayName}</p>
				<Button colorScheme={'red'} onClick={logout}>
					Sign Out
				</Button>
				<Button
					variant='ghost'
					onClick={() => alert('Are you sure you want to delete your account?')}
				>
					Delete Account
				</Button>
			</Box>
		</Box>
	)
}

export default Account
