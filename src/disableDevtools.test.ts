import { describe, expect, it, vi } from "vitest";

import { disableDevtools } from "./disableDevtools";

describe("Basic", () => {
  vi.stubGlobal("__REACT_DEVTOOLS_GLOBAL_HOOK__", {});

  it("__REACT_DEVTOOLS_GLOBAL_HOOK__ should typeof object", async () => {
    disableDevtools();
    expect((window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__).toBeTypeOf("object");
  });
});
