import { flatRoutes } from 'remix-flat-routes'
const js = await import('highlight.js/lib/languages/javascript')
/**
 * @type {import('@remix-run/dev').AppConfig}
 */
export default {
	cacheDirectory: './node_modules/.cache/remix',
	ignoredRouteFiles: ['**/*'],
	serverModuleFormat: 'esm',
	serverPlatform: 'node',
	tailwind: true,
	postcss: true,
	watchPaths: ['./tailwind.config.ts'],
	routes: async defineRoutes => {
		return flatRoutes('routes', defineRoutes, {
			ignoredRouteFiles: [
				'.*',
				'**/*.css',
				'**/*.test.{js,jsx,ts,tsx}',
				'**/__*.*',
			],
		})
	},
	mdx: async filename => {
		const [rehypeHighlight] = await Promise.all([
			import('rehype-highlight').then(mod => mod.default),
		])

		return {
			rehypePlugins: [rehypeHighlight, { languages: { js } }],
		}
	},
}
