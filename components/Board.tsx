import { Box, Grid, GridItem, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import Tile from './Tile'

interface ChessBoard {
	piece: number
	tileColor: string
}

const Board = () => {
	const LIGHT_SQUARE_COLOR = '#F8F8F8'
	const DARK_SQUARE_COLOR = '#D8D8D8'
	// white pieces capitalized
	//const WHITE
	const BOARD: ChessBoard[][] = [
		[
			{ piece: 8, tileColor: LIGHT_SQUARE_COLOR },
			{ piece: 10, tileColor: DARK_SQUARE_COLOR },
			{ piece: 9, tileColor: LIGHT_SQUARE_COLOR },
			{ piece: 7, tileColor: DARK_SQUARE_COLOR },
			{ piece: 6, tileColor: LIGHT_SQUARE_COLOR },
			{ piece: 9, tileColor: DARK_SQUARE_COLOR },
			{ piece: 10, tileColor: LIGHT_SQUARE_COLOR },
			{ piece: 8, tileColor: DARK_SQUARE_COLOR },
		],

		[
			{ piece: 11, tileColor: DARK_SQUARE_COLOR },
			{ piece: 11, tileColor: LIGHT_SQUARE_COLOR },
			{ piece: 11, tileColor: DARK_SQUARE_COLOR },
			{ piece: 11, tileColor: LIGHT_SQUARE_COLOR },
			{ piece: 11, tileColor: DARK_SQUARE_COLOR },
			{ piece: 11, tileColor: LIGHT_SQUARE_COLOR },
			{ piece: 11, tileColor: DARK_SQUARE_COLOR },
			{ piece: 11, tileColor: LIGHT_SQUARE_COLOR },
		],
		[
			{ piece: -1, tileColor: LIGHT_SQUARE_COLOR },
			{ piece: -1, tileColor: DARK_SQUARE_COLOR },
			{ piece: -1, tileColor: LIGHT_SQUARE_COLOR },
			{ piece: -1, tileColor: DARK_SQUARE_COLOR },
			{ piece: -1, tileColor: LIGHT_SQUARE_COLOR },
			{ piece: -1, tileColor: DARK_SQUARE_COLOR },
			{ piece: -1, tileColor: LIGHT_SQUARE_COLOR },
			{ piece: -1, tileColor: DARK_SQUARE_COLOR },
		],
		[
			{ piece: -1, tileColor: DARK_SQUARE_COLOR },
			{ piece: -1, tileColor: LIGHT_SQUARE_COLOR },
			{ piece: -1, tileColor: DARK_SQUARE_COLOR },
			{ piece: -1, tileColor: LIGHT_SQUARE_COLOR },
			{ piece: -1, tileColor: DARK_SQUARE_COLOR },
			{ piece: -1, tileColor: LIGHT_SQUARE_COLOR },
			{ piece: -1, tileColor: DARK_SQUARE_COLOR },
			{ piece: -1, tileColor: LIGHT_SQUARE_COLOR },
		],
		[
			{ piece: -1, tileColor: LIGHT_SQUARE_COLOR },
			{ piece: -1, tileColor: DARK_SQUARE_COLOR },
			{ piece: -1, tileColor: LIGHT_SQUARE_COLOR },
			{ piece: -1, tileColor: DARK_SQUARE_COLOR },
			{ piece: -1, tileColor: LIGHT_SQUARE_COLOR },
			{ piece: -1, tileColor: DARK_SQUARE_COLOR },
			{ piece: -1, tileColor: LIGHT_SQUARE_COLOR },
			{ piece: -1, tileColor: DARK_SQUARE_COLOR },
		],
		[
			{ piece: -1, tileColor: DARK_SQUARE_COLOR },
			{ piece: -1, tileColor: LIGHT_SQUARE_COLOR },
			{ piece: -1, tileColor: DARK_SQUARE_COLOR },
			{ piece: -1, tileColor: LIGHT_SQUARE_COLOR },
			{ piece: -1, tileColor: DARK_SQUARE_COLOR },
			{ piece: -1, tileColor: LIGHT_SQUARE_COLOR },
			{ piece: -1, tileColor: DARK_SQUARE_COLOR },
			{ piece: -1, tileColor: LIGHT_SQUARE_COLOR },
		],
		[
			{ piece: 5, tileColor: LIGHT_SQUARE_COLOR },
			{ piece: 5, tileColor: DARK_SQUARE_COLOR },
			{ piece: 5, tileColor: LIGHT_SQUARE_COLOR },
			{ piece: 5, tileColor: DARK_SQUARE_COLOR },
			{ piece: 5, tileColor: LIGHT_SQUARE_COLOR },
			{ piece: 5, tileColor: DARK_SQUARE_COLOR },
			{ piece: 5, tileColor: LIGHT_SQUARE_COLOR },
			{ piece: 5, tileColor: DARK_SQUARE_COLOR },
		],
		[
			{ piece: 2, tileColor: DARK_SQUARE_COLOR },
			{ piece: 4, tileColor: LIGHT_SQUARE_COLOR },
			{ piece: 3, tileColor: DARK_SQUARE_COLOR },
			{ piece: 1, tileColor: LIGHT_SQUARE_COLOR },
			{ piece: 0, tileColor: DARK_SQUARE_COLOR },
			{ piece: 3, tileColor: LIGHT_SQUARE_COLOR },
			{ piece: 4, tileColor: DARK_SQUARE_COLOR },
			{ piece: 2, tileColor: LIGHT_SQUARE_COLOR },
		],
	]

	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			const lightSquare = (i + j) % 2 !== 0
			var color = lightSquare ? '#f8f8f8' : '#d8d8d8'
			BOARD[i][j].tileColor = color
		}
	}

	return (
		<Box className='flex justify-center mx-auto min-h-screen'>
			<Grid
				w={400}
				h={400}
				templateRows='repeat(8, 1fr)'
				templateColumns='repeat(8, 1fr)'
			>
				{BOARD.flat().map((tile, i) => (
					<Tile piece={tile.piece} color={tile.tileColor} />
				))}
			</Grid>
		</Box>
	)
}

export default Board
