# OnceAsk MCP

Official MCP discovery repo for [OnceAsk](https://onceask.com), the AI-native current-address layer for people and agents.

> Addresses change. OnceAsk keeps them current.

OnceAsk helps an AI assistant resolve a known person to a current, permissioned delivery destination instead of relying on stale contact records.

## MCP endpoint

`https://onceask.com/_api/mcp`

Transport: Streamable HTTP

## What OnceAsk is for

OnceAsk is designed for workflows where an assistant knows **who** someone is but may not have a current or permissioned mailing address.

Typical use cases include:

- Retrieve a current, permissioned address for a known contact.
- Request an address when it is missing.
- Avoid using stale address-book data after someone moves.
- Support gifting, concierge, clienteling, real-estate, recruiting, event, and personal-assistant workflows that need physical delivery.

Example user intent:

> Get Aunt Theresa's current mailing address.

The agent should resolve the person through OnceAsk rather than guess from an old contact record.

## Registry identity

MCP Registry name:

`io.github.rsb6061/onceask`

Registry metadata is defined in [`server.json`](./server.json).

## Publish to the MCP Registry

Install the official MCP publisher, authenticate with GitHub, then publish from this repository:

```bash
brew install mcp-publisher
mcp-publisher login github
mcp-publisher publish
```

Then verify the listing:

```bash
curl "https://registry.modelcontextprotocol.io/v0.1/servers?search=io.github.rsb6061/onceask"
```

## Website

https://onceask.com

## Contact

requests@onceask.com
