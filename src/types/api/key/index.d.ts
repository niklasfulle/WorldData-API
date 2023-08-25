import { ApiKey } from '@prisma/client'
import { ZodIssue } from 'zod'

export interface CreateApiData {
  error: string | ZodIssue[] | null
  createdApiKey: ApiKey | null
}

export interface RevokeApiData {
  error: string | ZodIssue[] | null
  success: boolean
}

/*
type Meta = {
  id: string,
  title: string,
  date: string,
  tags: string[],
}

type BlogPost = {
  meta: Meta,
  content: ReactElement<any, string | JSXElementConstructor<any>>,
}
*/