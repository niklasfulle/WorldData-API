import { RateLimiter } from "limiter"
// TODO change rate limits 
export const continentsLimiter = new RateLimiter({
  tokensPerInterval: 5,
  interval: "hr",
  fireImmediately: true,
})

export const countriesLimiter = new RateLimiter({
  tokensPerInterval: 5,
  interval: "hr",
  fireImmediately: true,
})

export const citiesLimiter = new RateLimiter({
  tokensPerInterval: 5,
  interval: "hr",
  fireImmediately: true,
})