import { Box, Button } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
	return (
		<Box>
			<ul className='flex space-x-10 justify-end py-4 px-10 items-center border-b-2'>
				<li className='mr-auto'>Logo</li>
				<Link href='/animes'>
					<li className='cursor-pointer hover:underline'>My Animes</li>
				</Link>
				<Link href='/'>
					<li className='cursor-pointer hover:underline'>Page 2</li>
				</Link>
				<Link href='/'>
					<li className='cursor-pointer hover:underline'>Page 3</li>
				</Link>
				<Link href='/'>
					<li className='cursor-pointer hover:underline'>Page 4</li>
				</Link>
				<Button>Action</Button>
			</ul>
		</Box>
	)
}

export default Navbar
