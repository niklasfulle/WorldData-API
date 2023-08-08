import { RateLimiter } from "limiter"

export const continentsLimiter = new RateLimiter({
  tokensPerInterval: 25,
  interval: "hour",
  fireImmediately: true,
})

export const countriesLimiter = new RateLimiter({
  tokensPerInterval: 25,
  interval: "hour",
  fireImmediately: true,
})

export const citiesLimiter = new RateLimiter({
  tokensPerInterval: 25,
  interval: "hour",
  fireImmediately: true,
})