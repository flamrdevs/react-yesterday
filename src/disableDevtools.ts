//	====================================================================================
//	MAIN
//	====================================================================================

function disableDevtools() {
  if (typeof window !== "undefined" && window.document) {
    if (typeof (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__ !== "object") {
      return;
    }

    for (const prop in (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__) {
      if (prop === "renderers") {
        (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] = new Map();
        return;
      }

      (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] =
        typeof (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] === "function" ? function () {} : null;
    }
  }
}

//	====================================================================================
//	EXPORTS
//	====================================================================================

export { disableDevtools };
