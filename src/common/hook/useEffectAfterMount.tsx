import * as React from "react";

export function useEffectAfterMount(
    cb: Function,
    dependencies: React.DependencyList | undefined
) {
  const justMounted = React.useRef(true);

  React.useEffect(() => {
    if (!justMounted.current) {
      cb();
    }
    justMounted.current = false;
  }, [cb]);
}