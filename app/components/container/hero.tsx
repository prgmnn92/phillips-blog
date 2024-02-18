import { Link } from '@remix-run/react'
import Container from '../container'
import { Button } from '../ui/button'

const Hero = () => {
	return (
		<section className="relative isolate px-6 py-12 sm:pt-32 sm:mt-10 lg:px-8">
			<Container>
			<div className="mx-auto max-w-2xl">
				<div className="text-center">
					<h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl animate-slide-top [animation-fill-mode:backwards]">
						Phillip Pargmann
						<br />
						Front-End Developer
					</h1>
					<p className="mt-6 text-lg leading-8 text-primary/80 animate-slide-top [animation-delay:0.2s] [animation-fill-mode:backwards]">
						I'm passionate about finding
						solutions to technical problems and expanding my skillset. I thrive
						on learning new things and working on projects that challenge me.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6 animate-slide-top [animation-delay:0.4s] [animation-fill-mode:backwards]">
						<Link to="/about">
							<Button variant={'default'}>Learn more</Button>
						</Link>
					</div>
				</div>
			</div>
			</Container>
		</section>
	)
}

export default Hero
