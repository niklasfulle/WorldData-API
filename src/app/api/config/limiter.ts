import { RateLimiter } from "limiter"
// TODO change rate limits 
// ! Rate limiters for the auth API

export const resetPassword = new RateLimiter({
  tokensPerInterval: 5,
  interval: "hr",
  fireImmediately: true,
})

// ! Rate limiters for the v1 API
export const continentsLimiterV1 = new RateLimiter({
  tokensPerInterval: 5,
  interval: "hr",
  fireImmediately: true,
})

export const countriesLimiterV1 = new RateLimiter({
  tokensPerInterval: 5,
  interval: "hr",
  fireImmediately: true,
})

export const citiesLimiterV1 = new RateLimiter({
  tokensPerInterval: 5,
  interval: "hr",
  fireImmediately: true,
})

// ! Rate limiters for the v2 API

// ! Rate limiters for the v3 API

// ! Rate limiters for the v4 API