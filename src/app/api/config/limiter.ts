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

export const oceansLimiterV1 = new RateLimiter({
  tokensPerInterval: 5,
  interval: "hr",
  fireImmediately: true,
})

export const seasLimiterV1 = new RateLimiter({
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

export const continentsLimiterV2 = new RateLimiter({
  tokensPerInterval: 5,
  interval: "hr",
  fireImmediately: true,
})

export const oceansLimiterV2 = new RateLimiter({
  tokensPerInterval: 5,
  interval: "hr",
  fireImmediately: true,
})

export const seasLimiterV2 = new RateLimiter({
  tokensPerInterval: 5,
  interval: "hr",
  fireImmediately: true,
})

export const countriesLimiterV2 = new RateLimiter({
  tokensPerInterval: 5,
  interval: "hr",
  fireImmediately: true,
})

export const citiesLimiterV2 = new RateLimiter({
  tokensPerInterval: 5,
  interval: "hr",
  fireImmediately: true,
})

// ! Rate limiters for the v3 API

export const continentsLimiterV3 = new RateLimiter({
  tokensPerInterval: 5,
  interval: "hr",
  fireImmediately: true,
})

export const oceansLimiterV3 = new RateLimiter({
  tokensPerInterval: 5,
  interval: "hr",
  fireImmediately: true,
})

export const seasLimiterV3 = new RateLimiter({
  tokensPerInterval: 5,
  interval: "hr",
  fireImmediately: true,
})

export const countriesLimiterV3 = new RateLimiter({
  tokensPerInterval: 5,
  interval: "hr",
  fireImmediately: true,
})

export const citiesLimiterV3 = new RateLimiter({
  tokensPerInterval: 5,
  interval: "hr",
  fireImmediately: true,
})

// ! Rate limiters for the v4 API

export const continentsLimiterV4 = new RateLimiter({
  tokensPerInterval: 5,
  interval: "hr",
  fireImmediately: true,
})

export const oceansLimiterV4 = new RateLimiter({
  tokensPerInterval: 5,
  interval: "hr",
  fireImmediately: true,
})

export const seasLimiterV4 = new RateLimiter({
  tokensPerInterval: 5,
  interval: "hr",
  fireImmediately: true,
})

export const countriesLimiterV4 = new RateLimiter({
  tokensPerInterval: 5,
  interval: "hr",
  fireImmediately: true,
})

export const citiesLimiterV4 = new RateLimiter({
  tokensPerInterval: 5,
  interval: "hr",
  fireImmediately: true,
})