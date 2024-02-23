import { Link } from '@remix-run/react'
import Container from '../container'
import { Button } from '../ui/button'

const Hero = () => {
	return (
		<section className="relative isolate px-6 py-12 sm:mt-10 sm:pt-32 lg:px-8">
			<Container>
				<div className="mx-auto max-w-2xl">
					<div className="text-center">
						<h1 className="animate-slide-top text-4xl font-bold tracking-tight text-primary [animation-fill-mode:backwards] sm:text-6xl">
							Phillip Pargmann
							<br />
							Fullstack Developer
						</h1>
						<p className="mt-6 animate-slide-top text-lg leading-8 text-primary/80 [animation-fill-mode:backwards] [animation-delay:0.2s]">
							I'm passionate about finding solutions to technical problems and
							expanding my skillset. I thrive on learning new things and working
							on projects that challenge me.
						</p>
						<div className="mt-10 flex animate-slide-top items-center justify-center gap-x-6 [animation-fill-mode:backwards] [animation-delay:0.4s]">
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
