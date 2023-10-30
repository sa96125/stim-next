import * as React from "react";
import { TabBarContextValue } from ".types";

export const TabBarContext = React.createContext<TabBarContextValue>({
  selected: null ,
  touch: () => {},
});

export const useTabBarContext = () => {
  const context = React.useContext(TabBarContext);
  if (!context) {
    throw new Error(
      `Sample compound components cannot be rendered outside the Sample component`
    );
  }
  return context;
};
