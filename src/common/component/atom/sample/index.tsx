"use client";

import { useCallback, useMemo, useState } from "react";
import { Container } from ".styled";
import { SampleProps, SampleChildProps } from ".types";
import { SampleContext, useSampleContext } from ".context";
import {useEffectAfterMount} from "@/common/hook/useEffectAfterMount";


/*
 * Set component states, cycles, common logic and container style.
 */

const SampleContainer = ({ onChange, children }: SampleProps) => {
  const [state, setState] = useState(false);
  const handleState = useCallback(() => setState((prev) => !prev), []);
  const value = useMemo(() => ({ state, handleState }), [state]);

  useEffectAfterMount(() => onChange(state), [state]);

  return (
    <SampleContext.Provider value={value}>
      <Container>{children}</Container>
    </SampleContext.Provider>
  );
};

function SampleChild({ children }: SampleChildProps) {
  const { state } = useSampleContext();
  return state ? children : null;
}

/* Compound All Component */

export const Sample = Object.assign(SampleContainer, {
  Child: SampleChild,
});
