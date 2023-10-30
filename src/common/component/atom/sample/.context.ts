import * as React from "react";
import { SampleContextValue } from ".types";

export const SampleContext = React.createContext<SampleContextValue>({
  state: false,
  handleState: () => {},
});

export const useSampleContext = () => {
  const context = React.useContext(SampleContext);
  if (!context) {
    throw new Error(
      `Sample compound components cannot be rendered outside the Sample component`
    );
  }
  return context;
};
