import { Box } from '@chakra-ui/react'
import React from 'react'
import Piece from './Piece'

interface TileProps {
	rank?: number
	file?: string
	color: string
	piece?: number
}

const Tile: React.FC<TileProps> = ({ rank, file, color, piece }) => {
	return (
		<Box className='flex justify-center' bg={color}>
			<Box className='flex justify-center items-center'>
				{<Piece piece={piece} />}
			</Box>
		</Box>
	)
}

export default Tile
