import { CreateApiData } from "@/types/api/key"

export async function createApiKey() {
  const res = await fetch("/api/api-key/create")
  const data = (await res.json()) as CreateApiData

  if (data.error || !data.createdApiKey) {
    if (data.error instanceof Array) {
      throw new Error(data.error.join(" "))
    }

    throw new Error(data.error ?? "An unknown error occurred")
  }

  return data.createdApiKey.key
}

export async function revokeApiKey() {
  const res = await fetch('/api/api-key/revoke', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = (await res.json()) as { error?: string }

  if (data.error) {
    throw new Error(data.error)
  }
}

export async function clearHistory() {
  const res = await fetch('/api/api-key/clear-history', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = (await res.json()) as { error?: string }

  if (data.error) {
    throw new Error(data.error)
  }
}