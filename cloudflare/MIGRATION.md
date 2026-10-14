# OnceAsk Cloudflare migration

## Cutover strategy

1. Restore the public domain with `onceask-edge-proxy`, which forwards requests to the healthy legacy Floot origin.
2. Keep the existing Postgres database during the runtime migration.
3. Port the frontend and API runtime to a native Cloudflare Worker.
4. Copy Floot-managed secrets server-to-server into Cloudflare Worker secrets; do not expose them in source or chat.
5. Move static assets out of Floot storage.
6. Verify auth, contact import/sync, address requests, recipient update links, MCP/OAuth, email, and fulfillment flows.
7. Switch the domain from proxy mode to the native Worker.
8. Only then migrate Postgres to a new database/D1 if worthwhile and retire Floot.

The proxy is a temporary availability layer, not the final architecture.
