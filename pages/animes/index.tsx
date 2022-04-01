import { Grid } from '@chakra-ui/react'
import axios from 'axios'
import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import AnimeCard from '../../components/AnimeCard'

export interface AnimeResponse {
	myAnimes: {
		id: number
		image: {
			medium: string
		}
		name: string
		type: string
		language: string
	}[]
}

export const MY_ANIMES = [
	'code geass',
	'attack on titan',
	'erased',
	'sword art online',
	'hunter x hunter',
]
const Index: NextPage<AnimeResponse> = ({ myAnimes }) => {
	return (
		<div>
			<Grid templateColumns={'repeat(5, 1fr)'} pt={5}>
				{myAnimes.map((a) => (
					<Link href={'/animes/' + a.id}>
						<a>
							<AnimeCard key={a.id} data={a} />
						</a>
					</Link>
				))}
			</Grid>
		</div>
	)
}

// runs at build time, not in browser
export const getStaticProps = async () => {
	var animes: AnimeResponse[] = []
	for (let i = 0; i < MY_ANIMES.length; i++) {
		const res = await axios.get(
			`https://api.tvmaze.com/singlesearch/shows?q=${MY_ANIMES[i]}`
		)
		animes.push(res.data)
	}
	return {
		props: {
			myAnimes: animes,
		},
	}
}

export default Index
