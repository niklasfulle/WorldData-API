import { db as prisma } from '@/lib/db/prisma'

export const createApiRequest = async (duration: number, method: string, path: string, status: number, apiKeyId: string, usedApiKey: string, response: string) => {
  await prisma.apiRequest.create({
    data: {
      duration,
      method,
      path,
      status,
      apiKeyId,
      usedApiKey,
      response
    },
  })
}