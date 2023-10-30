"use client";

import * as React from "react";
import { Provider } from "jotai";
import { QueryClient, QueryClientProvider } from "react-query";

interface Props {
    children: React.ReactNode;
}

const queryClient = new QueryClient();

export default function StoreRegistry({ children }: Props) {
  return (
    <Provider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
}
