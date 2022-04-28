import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { GiChessKing } from 'react-icons/gi'

interface PieceProps {
	piece?: number
}

const Piece: React.FC<PieceProps> = ({ piece }) => {
	const DEFAULT_CSS = 'cursor-pointer'
	switch (piece) {
		case 0:
			return (
				<Box className={`${DEFAULT_CSS}`}>
					<Image
						w={16}
						src='https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg'
						alt='white king'
					/>
				</Box>
			)
		case 1:
			return (
				<Box className={`${DEFAULT_CSS}`}>
					<Image
						w={16}
						src='https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg'
						alt='white queen'
					/>
				</Box>
			)
		case 2:
			return (
				<Box className={`${DEFAULT_CSS}`}>
					<Image
						w={16}
						src='https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg'
						alt='white rook'
					/>
				</Box>
			)
		case 3:
			return (
				<Box className={`${DEFAULT_CSS}`}>
					<Image
						w={16}
						src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg'
						alt='white bishop'
					/>
				</Box>
			)
		case 4:
			return (
				<Box className={`${DEFAULT_CSS}`}>
					<Image
						w={16}
						src='https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg'
						alt='white knight'
					/>
				</Box>
			)
		case 5:
			return (
				<Box className={`${DEFAULT_CSS}`}>
					<Image
						w={16}
						src='https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg'
						alt='white pawn'
					/>
				</Box>
			)
		case 6:
			return (
				<Box className={`${DEFAULT_CSS}`}>
					<Image
						w={16}
						src='https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg'
						alt='black king'
					/>
				</Box>
			)
		case 7:
			return (
				<Box className={`${DEFAULT_CSS}`}>
					<Image
						w={16}
						src='https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg'
						alt='black queen'
					/>
				</Box>
			)
		case 8:
			return (
				<Box className={`${DEFAULT_CSS}`}>
					<Image
						w={16}
						src='https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg'
						alt='black rook'
					/>
				</Box>
			)
		case 9:
			return (
				<Box className={`${DEFAULT_CSS}`}>
					<Image
						w={16}
						src='https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg'
						alt='black bishop'
					/>
				</Box>
			)
		case 10:
			return (
				<Box className={`${DEFAULT_CSS}`}>
					<Image
						w={16}
						src='https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg'
						alt='black knight'
					/>
				</Box>
			)
		case 11:
			return (
				<Box className={`${DEFAULT_CSS}`}>
					<Image
						w={16}
						src='https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg'
						alt='black pawn'
					/>
				</Box>
			)

		default:
			return <></>
	}
}

export default Piece
