# Upstash Redis block

Adds one workspace package at `packages/cache`, named `@workspace/cache`. The package uses Upstash Redis and exports a lazy client plus small cache helpers.

## Environment

Configure these variables in the runtime environment:

- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN` (secret)

The client is created on first use with Upstash's `Redis.fromEnv()`, so importing the package does not require credentials to be present.

## Usage

```ts
import { cache } from "@workspace/cache"

await cache.set("session:123", { userId: "user_123" }, { ttlSeconds: 3600 })
const session = await cache.get<{ userId: string }>("session:123")
await cache.delete("session:123")
```

This is an Upstash-specific integration. It does not claim to define a provider-neutral cache interface or configure Drizzle query caching.

## Source

The descriptor follows the DeesseJS V1 copy-first block contract. The package manifest declares the package name and runtime dependencies that the CLI reports from the block assets.
