import * as util from "util";
const rimraf = util.promisify(require("rimraf"));

import run from "./run";

describe("e2e", () => {
  it("should pass", async () => {
    await rimraf("./output");
    await run('', '');

    expect(true).toBe(true);
  });
});
