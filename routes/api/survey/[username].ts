import { Handlers } from "$fresh/server.ts";

export const handler: Handlers<Request, { store: Deno.Kv }> = {
  async POST(_req, _ctx) {
    const kv = _ctx.state.store;
    const username = _ctx.params.username;
    const surveyResult = await _req.json();
    const res = await kv.set(
      ["survey", username],
      JSON.stringify({ result: surveyResult }),
    );
    if (!res.ok) {
      return new Response("Failed to save", { status: 500 });
    }
    return new Response("OK", { status: 201 });
  },
  async GET(_req, _ctx) {
    const kv = _ctx.state.store;
    const username = _ctx.params.username;
    const surveyResult = await kv.get(["survey", username]);
    if (!surveyResult) {
      return new Response("Not found", { status: 404 });
    }
    return new Response(JSON.stringify(surveyResult.value));
  },
};
