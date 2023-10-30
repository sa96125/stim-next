import * as React from "react";
import { NavBarContextValue } from ".types";

export const NavBarContext = React.createContext<NavBarContextValue>({
  hasBackButton: false,
  onIconClick: () => {},
});

export const useNavBarContext = () => {
  const context = React.useContext(NavBarContext);
  if (!context) {
    throw new Error(
      `Sample compound components cannot be rendered outside the Sample component`
    );
  }
  return context;
};
