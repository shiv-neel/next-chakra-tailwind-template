import { Box, Button, Heading, Image } from '@chakra-ui/react'
import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { MY_ANIMES } from '.'
import { Anime } from '../../types/anime'

interface PageProps {
	anime: Anime
}

const SingleAnimePage: React.FC<PageProps> = ({ anime }) => {
	return (
		<Box>
			<Heading as='h1'>{anime.name}</Heading>
			<Image src={anime.image.medium} width={150} />
			{anime.summary?.substring(3, anime.summary.length - 4)}
			<Button className='gap-2'>
				<FaPlus />
				Add to My List
			</Button>
		</Box>
	)
}

export const getStaticProps: GetStaticProps = async (ctx) => {
	const id = ctx.params!.id
	const res = await axios.get(`https://api.tvmaze.com/shows/${id}`)
	const data: Anime = res.data
	return {
		props: {
			anime: data,
		},
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	var animes: Anime[] = []

	// getting the ids of all animes
	for (let i = 0; i < MY_ANIMES.length; i++) {
		const res = await axios.get(
			`https://api.tvmaze.com/singlesearch/shows?q=${MY_ANIMES[i]}`
		)
		animes.push(res.data)
	}
	const paths = animes.map((a) => ({ params: { id: a.id.toString() } }))
	return {
		paths,
		fallback: false,
	}
}

export default SingleAnimePage
