import { Box, Button, Image } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { FaUser } from 'react-icons/fa'
import { useAuth } from '../auth/user'

const Navbar = () => {
	const user = useAuth().user
	return (
		<Box>
			<ul className='flex space-x-10 justify-end py-4 px-10 items-center bg-slate-200 shadow-md'>
				<li className='mr-auto'>Logo</li>
				<Link href='/animes'>
					<li className='cursor-pointer hover:underline'>My Animes</li>
				</Link>
				<Link href='/discover'>
					<li className='cursor-pointer hover:underline'>Discover</li>
				</Link>
				<Link href='/friends'>
					<li className='cursor-pointer hover:underline'>Friends</li>
				</Link>
				{user ? (
					<Link href='/account'>
						{user.photoURL ? (
							<a>
								<Image
									className='hover:scale-105 duration-75'
									src={user.photoURL as string}
									maxW={16}
									rounded='xl'
								/>
							</a>
						) : (
							<FaUser />
						)}
					</Link>
				) : (
					<Link href='/signin'>
						<Button colorScheme={'twitter'}>Sign In</Button>
					</Link>
				)}
			</ul>
		</Box>
	)
}

export default Navbar
