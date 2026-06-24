// TODO: JSONPlaceholder API test
import {
  expect,
  test
} from "@playwright/test";

import { ENDPOINTS }
from "../../constants/endpoints";

import { getRequest }
from "../../utils/apiHelper";

test("Validate Post API", async ({ request }) => {

  const response =
    await getRequest(
      request,
      ENDPOINTS.POSTS
    );

  expect(
    response.status()
  ).toBe(200);

  const body =
    await response.json();

  expect(body.id)
    .toBe(1);
});