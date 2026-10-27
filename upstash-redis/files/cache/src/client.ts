import { Redis } from "@upstash/redis"

let client: Redis | undefined

/**
 * Return the process-wide Upstash Redis client.
 *
 * Credentials are read lazily so importing this package during build-time
 * configuration does not require runtime secrets.
 */
export function getRedisClient(): Redis {
  return (client ??= Redis.fromEnv())
}
