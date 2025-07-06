import { PrismaClient } from '../generated/prisma'


const prisma = new PrismaClient()

async function main() {
  // Seed blog posts
  await prisma.blog.createMany({
    data: [
      {
        title: 'First Blog Post',
        content: 'This is the content of the first post.',
        published: true,
        author: 'Maxwell',
      },
      {
        title: 'Second Blog Post',
        content: 'This is another blog post.',
        published: false,
        author: 'Maxwell',
      },
    ],
  })

  // Seed emails
  await prisma.email.createMany({
    data: [
      {
        to: 'reader@example.com',
        from: 'maxwell@cvapp.com',
        subject: 'Welcome!',
        body: 'Thanks for subscribing to my blog.',
        status: 'SENT',
      },
      {
        to: 'admin@cvapp.com',
        from: 'monitor@cvapp.com',
        subject: 'Alert: High Traffic',
        body: 'Your site is experiencing high traffic.',
        status: 'PENDING',
      },
    ],
  })
}

main()
  .then(() => {
    console.log('✅ Seed data inserted.')
  })
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
