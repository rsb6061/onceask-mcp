const ORIGIN = "https://onceask.floot.app";

function rewriteLocation(value, incomingUrl) {
  if (!value) return value;
  try {
    const location = new URL(value, ORIGIN);
    if (location.hostname === "onceask.floot.app") {
      location.protocol = incomingUrl.protocol;
      location.hostname = incomingUrl.hostname;
      location.port = incomingUrl.port;
      return location.toString();
    }
  } catch {}
  return value;
}

export default {
  async fetch(request) {
    const incomingUrl = new URL(request.url);
    const upstreamUrl = new URL(request.url);
    upstreamUrl.protocol = "https:";
    upstreamUrl.hostname = "onceask.floot.app";
    upstreamUrl.port = "";

    const headers = new Headers(request.headers);
    headers.set("x-forwarded-host", incomingUrl.host);
    headers.set("x-forwarded-proto", incomingUrl.protocol.replace(":", ""));

    const response = await fetch(new Request(upstreamUrl.toString(), {
      method: request.method,
      headers,
      body: request.method === "GET" || request.method === "HEAD" ? undefined : request.body,
      redirect: "manual",
    }));

    const responseHeaders = new Headers(response.headers);
    const location = responseHeaders.get("location");
    if (location) responseHeaders.set("location", rewriteLocation(location, incomingUrl));

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders,
    });
  },
};
