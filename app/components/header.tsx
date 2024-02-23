import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { NavLink } from '@remix-run/react'
import { cn } from '#app/utils/misc'
import { Logo } from './Logo'
import { Socials } from './socials'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from './ui/navigation-menu'

const menuItems = [
	{ title: 'Home', href: '/' },
	{ title: 'About', href: '/about' },
	{ title: 'Resources', href: '/resources' },
	{ title: 'Projects', href: '/projects' },
	{ title: 'Contact', href: 'mailto:pargmann92@gmail.com' },
]

const Header = () => {
	return (
		<header className="container py-6">
			<nav className="flex flex-wrap items-center justify-between gap-4 sm:flex-nowrap md:gap-8">
				<Logo />
				<NavigationMenu>
					<NavigationMenuList>
						<div className="hidden sm:flex">
							{menuItems.map((item, index) => (
								<NavigationMenuItem key={index}>
									<MyNavLink href={item.href} title={item.title} />
								</NavigationMenuItem>
							))}
						</div>
						{/* mobile menu */}
						<NavigationMenuItem className="block sm:hidden">
							<NavigationMenuTrigger>
								<HamburgerMenuIcon />
							</NavigationMenuTrigger>
							<NavigationMenuContent className="relative flex list-none flex-col gap-2 p-2">
								{menuItems.map((item, index) => (
									<NavigationMenuItem key={index}>
										<MyNavLink href={item.href} title={item.title} />
									</NavigationMenuItem>
								))}
							</NavigationMenuContent>
						</NavigationMenuItem>
						{/* mobile menu end  */}
					</NavigationMenuList>
				</NavigationMenu>
				<div className="hidden sm:flex">
					<Socials />
				</div>
			</nav>
		</header>
	)
}

function MyNavLink({
	href,
	title,
	className,
}: {
	href: string
	title: string
	className?: string
}) {
	return (
		<NavLink to={href} className={cn('p-2 hover:text-brand', className)}>
			{({ isActive }) => (
				<NavigationMenuLink asChild>
					<span className={isActive ? 'text-brand' : ''}>{title}</span>
				</NavigationMenuLink>
			)}
		</NavLink>
	)
}

export default Header
