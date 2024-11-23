import { FreshContext } from "$fresh/server.ts";

interface State {
  store: Deno.Kv;
}
export const kv = await Deno.openKv();

export async function handler(_req: Request, ctx: FreshContext<State>) {
  ctx.state.store = kv;
  const resp = await ctx.next();
  resp.headers.set("server", "fresh server");
  return resp;
}
