import { type MetaFunction } from '@remix-run/node'
import Hero from '#app/components/container/hero'

export const meta: MetaFunction = () => [{ title: 'Phillip Pargmann | Fullstack Developer' }]

export default function Index() {
	return (
		<main className="font-poppins grid h-full">
			<Hero />
		</main>
	)
}
