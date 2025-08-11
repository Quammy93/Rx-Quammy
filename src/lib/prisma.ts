// lib/prisma.ts
// Prevent multiple instances during hot-reloads in development
import { PrismaClient as MongoPrismaClient } from '@prisma/mongo-client'
import { PrismaClient as PostgresPrismaClient } from '@prisma/postgres-client'

declare global {
  // eslint-disable-next-line no-var
  var __prismaMongo: MongoPrismaClient | undefined
  // eslint-disable-next-line no-var
  var __prismaPostgres: PostgresPrismaClient | undefined
}

export const prismaMongo =
  global.__prismaMongo ??
  new MongoPrismaClient()

export const prismaPostgres =
  global.__prismaPostgres ??
  new PostgresPrismaClient()

if (process.env.NODE_ENV === 'development') {
  global.__prismaMongo = prismaMongo
  global.__prismaPostgres = prismaPostgres
}
