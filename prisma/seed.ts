import { prisma } from '#app/utils/db.server.ts'
// import {
// 	cleanupDb,
// } from '#tests/db-utils.ts'

async function seed() {
	console.log('🌱 Seeding...')
	console.time(`🌱 Database has been seeded`)

	console.time('🧹 Cleaned up the database...')
	//await cleanupDb(prisma)
	console.timeEnd('🧹 Cleaned up the database...')

	console.time(`🌱 Create Post...`)

	await prisma.post.create({
		data: {
			title: 'Hello World!',
			slug: 'hello-world',
			content: 'Welcome to the KCD Blog! This is the first post.',
			published: true,
		},
	})

	console.timeEnd(`🌱 Create Post...`)

	console.timeEnd(`🌱 Database has been seeded`)
}

seed()
	.catch(e => {
		console.error(e)
		process.exit(1)
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
