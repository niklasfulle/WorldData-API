export function getGoogleCredentials(): { googleClientId: string; googleClientSecret: string } {
  const googleClientId = process.env.GOOGLE_CLIENT_ID
  const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET
  if (!googleClientId || googleClientId.length === 0) {
    throw new Error('Missing GOOGLE_CLIENT_ID')
  }

  if (!googleClientSecret || googleClientSecret.length === 0) {
    throw new Error('Missing GOOGLE_CLIENT_SECRET')
  }

  return { googleClientId, googleClientSecret }
}

export function getGithubCredentials(): { githubClientId: string; githubClientSecret: string } {
  const githubClientId = process.env.GITHUB_CLIENT_ID
  const githubClientSecret = process.env.GITHUB_CLIENT_SECRET
  if (!githubClientId || githubClientId.length === 0) {
    throw new Error('Missing GITHUB_CLIENT_ID')
  }

  if (!githubClientSecret || githubClientSecret.length === 0) {
    throw new Error('Missing GITHUB_CLIENT_SECRET')
  }

  return { githubClientId, githubClientSecret }
}