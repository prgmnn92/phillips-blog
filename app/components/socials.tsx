import { Icon } from './ui/icon'

export function Socials() {
	return (
		<ul className="flex gap-4">
			<li>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://www.upwork.com/freelancers/phillippargmann"
				>
					<Icon name="upwork-icon" />
				</a>
			</li>
			<li>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://twitter.com/PargmannPhillip"
				>
					<Icon name="twitter-icon" />
				</a>
			</li>
			<li>
				<a target="_blank" rel="noreferrer" href="https://github.com/prgmnn92">
					<Icon name="github-logo" />
				</a>
			</li>
			<li>
				<a
					target="_blank"
					rel="noreferrer"
					href="https://www.linkedin.com/in/phillip-pargmann-3810811b4/"
				>
					<Icon name="linkedin-icon" />
				</a>
			</li>
		</ul>
	)
}
