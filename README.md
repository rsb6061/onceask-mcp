# OnceAsk MCP — Contacts + Current Mailing Addresses

Official MCP discovery repo for [OnceAsk](https://onceask.com), a contacts and address-book MCP for AI agents that need a person's **current mailing address**, not just the last address stored in a contact record.

> Addresses change. OnceAsk keeps them current.

OnceAsk helps an AI assistant resolve a known person to a current, permissioned delivery destination or request an update when the address is missing or stale.

## MCP endpoint

`https://onceask.com/_api/mcp`

Transport: Streamable HTTP

Registry identity: `io.github.rsb6061/onceask`

## What makes OnceAsk different

A conventional contacts integration can tell an agent **who** a person is and expose whatever fields are stored for that contact. OnceAsk focuses on the next problem: **is this person's mailing address current and usable for this physical-delivery action?**

OnceAsk can return an explicit delivery state instead of treating a saved address as automatically current:

- `authorized` — the recipient is ready for an authorized delivery action.
- `permission_required` — request recipient permission.
- `address_update_required` — ask the recipient to confirm or update the current address.
- `ambiguous` — ask the user which matching person they mean.
- `not_found` — collect or create the recipient first.

## Core MCP tools

### `resolve_delivery`

Resolve a known person or contact to a current delivery state. This is the preferred primitive for AI agents that need to send something physical.

### `request_delivery_permission`

Trigger the recipient-confirmation flow when an address is missing, stale, or not yet authorized.

### `list_handwritten_cards`

List supported Handwrytten card designs and handwriting styles without exposing recipient data.

### `send_handwritten_card`

Fulfill an authorized card delivery using an opaque delivery token. The preferred flow does not return the recipient's raw street address as ordinary model output.

## Example agent workflows

- "Send Aunt Theresa a birthday card."
- "Mail this client a thank-you gift."
- "Get John's current mailing address before we send the invitation."
- "Ask Sarah for her new address."
- "Send the document to Mike without relying on the address in our old CRM record."

The agent can identify the person from its existing context, then use OnceAsk to resolve the current delivery state.

## Useful links

- [Contacts MCP](https://onceask.com/contacts-mcp)
- [Address Book MCP](https://onceask.com/address-book-mcp)
- [MCP overview](https://onceask.com/mcp)
- [Developer quickstart](https://onceask.com/developers)
- [Developer docs](https://onceask.com/docs)
- [AI agent address book](https://onceask.com/ai-agent-address-book)
- [Mailing address API](https://onceask.com/mailing-address-api)
- [Agent-readable guide](https://onceask.com/agents.txt)
- [OpenAPI schema](https://onceask.com/.well-known/openapi.json)
- [MCP manifest](https://onceask.com/.well-known/mcp.json)

## Live directory listings

- [Official Model Context Protocol Registry](https://registry.modelcontextprotocol.io/?q=io.github.rsb6061%2Fonceask)
- [Glama connector — health, tools, and schema](https://glama.ai/mcp/connectors/io.github.rsb6061/onceask)

These listings point to the same production endpoint and registry identity: `io.github.rsb6061/onceask`.

## MCP Registry

The registry metadata is defined in [`server.json`](./server.json).

To verify the official registry listing:

```bash
curl "https://registry.modelcontextprotocol.io/v0.1/servers?search=io.github.rsb6061/onceask"
```

## Website

https://onceask.com

## Contact

requests@onceask.com
