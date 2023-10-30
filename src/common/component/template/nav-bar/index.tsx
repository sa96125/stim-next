"use client";

import * as React from "react";
import { NavBarProps } from "./.types";
import { Container, Tools } from "./.styled";
import {DefaultProps} from "../../../type";

const NavBarContainer = (props: NavBarProps) => {
  const { hasBackButton = false, icon, onIconClick, children } = props;

  return (
    <Container>
      <Tools>
        {hasBackButton && <p>back</p>}
        {icon && <p onClick={() => onIconClick()}>icon</p>}
      </Tools>
      {children}
    </Container>
  );
};

const NavBarTitle = ({ children }: DefaultProps) => {
  return <h1>{children}</h1>;
};

const NavBarDescription = ({ children }: DefaultProps) => {
  return <p>{children}</p>;
};

export default Object.assign(NavBarContainer, {
  Title: NavBarTitle,
  Description: NavBarDescription,
});
