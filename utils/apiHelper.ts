// TODO: API helper
import { APIRequestContext } from "@playwright/test";

export async function getRequest(
  request: APIRequestContext,
  url: string
) {
  return await request.get(url, {
    ignoreHTTPSErrors: true
  });
}