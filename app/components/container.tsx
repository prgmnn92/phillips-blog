import React from 'react'
import { cn } from '#app/utils/misc'

const Container = ({
	children,
	className,
}: {
	children: React.ReactNode
	className?: string
}) => {
	return (
		<div className={cn('container px-6 lg:px-8', className)}>{children}</div>
	)
}

export default Container
