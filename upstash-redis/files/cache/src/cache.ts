import { getRedisClient } from "./client.js"

export const cache = {
  get<T>(key: string): Promise<T | null> {
    return getRedisClient().get<T>(key)
  },

  set<T>(
    key: string,
    value: T,
    options?: { ttlSeconds?: number },
  ): Promise<"OK" | null> {
    const redis = getRedisClient()

    if (options?.ttlSeconds !== undefined) {
      return redis.set(key, value, { ex: options.ttlSeconds })
    }

    return redis.set(key, value)
  },

  delete(key: string): Promise<number> {
    return getRedisClient().del(key)
  },
}
