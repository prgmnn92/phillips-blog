import { type MetaFunction } from '@remix-run/node'
import Hero from '#app/components/container/hero'

export const meta: MetaFunction = () => [{ title: 'Phillip Pargmnn' }]

export default function Index() {
	return (
		<main className="font-poppins grid h-full">
			<Hero />
		</main>
	)
}
