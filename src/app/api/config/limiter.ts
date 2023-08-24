import { RateLimiter } from "limiter"
// TODO change rate limits 
// ! Rate limiters for the auth API

export const resetPassword = new RateLimiter({
  tokensPerInterval: 5,
  interval: "hr",
  fireImmediately: true,
})

// ! Rate limiters for the v1 API
export const limiterV1 = new RateLimiter({
  tokensPerInterval: 100,
  interval: "hr",
  fireImmediately: true,
})

// ! Rate limiters for the v2 API

export const limiterV2 = new RateLimiter({
  tokensPerInterval: 100,
  interval: "hr",
  fireImmediately: true,
})


// ! Rate limiters for the v3 API

export const limiterV3 = new RateLimiter({
  tokensPerInterval: 100,
  interval: "hr",
  fireImmediately: true,
})

// ! Rate limiters for the v4 API

export const limiterV4 = new RateLimiter({
  tokensPerInterval: 100,
  interval: "hr",
  fireImmediately: true,
})