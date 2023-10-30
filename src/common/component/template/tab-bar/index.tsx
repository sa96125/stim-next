"use client";

import * as React from "react";
import { useCallback, useMemo, useState } from "react";
import { Container, Wrapper, Label } from "./.styled";
import { TabBarProps, TabBarButtonProps } from "./.types";
import { TabBarContext, useTabBarContext } from "./.context";
import {useEffectAfterMount} from "@/common/hook/useEffectAfterMount";

const TabBarContainer = ({ onTab, children }: TabBarProps) => {
  const [selected, setSelected] = useState<string>("");
  const touch = useCallback((tab: string) => setSelected(tab), []);
  const value = useMemo(() => ({ selected, touch }), [selected]);

  useEffectAfterMount(() => onTab(selected), [selected]);

  return (
    <TabBarContext.Provider value={value}>
      <Container>{children}</Container>
    </TabBarContext.Provider>
  );
};

const TabBarButton = (props: TabBarButtonProps) => {
  const { selected, touch } = useTabBarContext();
  const isThisSelected = useMemo(() => selected === props.title, [selected]);

  return (
    <Wrapper href={props.href} onClick={() => touch(props)}>
      <img src={props.icon} alt="" />
      <Label>{props.title}</Label>
    </Wrapper>
  );
};

export default Object.assign(TabBarContainer, {
  Button: TabBarButton,
});
