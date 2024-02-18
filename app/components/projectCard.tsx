
const ProjectCard = ({ project }: { project: any }) => {
	return (
		<article
			key={project.id}
			className="flex flex-col items-start justify-between max-w-56"
		>
			<div className="max-w-xl">
				<div className="group relative">
					<h3 className="mt-3 text-lg font-semibold leading-6 text-primary group-hover:text-primary/80">
						<a href={project.url} target='_blank' rel='noreferrer'>
							<span className="absolute inset-0" />
							{project.title}
						</a>
					</h3>
					<p className="mt-5 text-sm leading-6 text-primary/80">
						{project.description}
					</p>
				</div>
			</div>
		</article>
	)
}

export default ProjectCard
