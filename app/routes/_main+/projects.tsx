import Container from '#app/components/container'
import Heading from '#app/components/heading'
import ProjectCard from '#app/components/projectCard'
import { MetaFunction } from '@remix-run/node'

const projects = [
	{
		id: 1,
		title: 'intervideo',
		description:
			'3D showroom application with hotspots in which you can display & update informations, images or videos. Built with React, Three.js. and contentful as headless CMS. (In progress)',
		url: 'https://intervideo.de/',
	},
	{
		id: 2,
		title: 'Femlove',
		description:
			'Blog website build with NextJS, TailwindCSS and Sanity.io as headless CMS.',
		url: 'https://femlove.blog/',
	},
	{
		id: 5,
		title: 'Sangfroid',
		description:
			'As a member of the core team, I have been providing ongoing support to Sangfroid with Webflow development for over three years and continue to do so.',
		url: 'https://www.sangfroidstudio.com/',
	},
	{
		id: 3,
		title: 'Culcha',
		description: 'A multi-language website built with Webflow.',
		url: 'https://www.culcha.com/',
	},
	{
		id: 4,
		title: 'Kursinsel',
		description:
			'I provide ongoing development support for Mixpanel, Uscreen and Webflow to Kursinsel as part of their team.',
		url: 'https://www.kursinsel.de/',
	},
	{
		id: 6,
		title: 'Targeted Provision',
		description:
			'Also a website built with Webflow. The CMS is connected to Airtable through whalesync. I provide ongoing support to the team.',
		url: 'https://www.targetedprovision.com/',
	},
]
export const meta: MetaFunction = () => [
	{ title: 'Phillip Pargmann | Projects & Partnerships' },
	{
		name: 'Phillip Pargmann',
		content: 'This page contains information about projects that I worked on and relationships that I built.',
	},
]

export default function ProjectsRoute() {
	return (
		<section className="py-12 sm:py-32">
			<Container>
				<Heading
					title="My Latest Projects & Partnerships"
					text="Throughout my career, I have contributed to a wide array of projects, fostering long-term partnerships and completing numerous assignments. Below are highlights of my projects and the enduring relationships I've established over the years."
				/>
				<div className="mx-auto mt-16 grid max-w-2xl animate-slide-top grid-cols-1 gap-x-8 gap-y-20 [animation-fill-mode:backwards] [animation-delay:0.4s] lg:max-w-screen-lg lg:grid-cols-3">
					{projects.map(project => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</Container>
		</section>
	)
}
