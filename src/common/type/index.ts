import React from "react";

export interface DefaultProps {
  children: React.ReactNode;
}

export interface AppPage {
  id: number;
  title: string;
  description: string;
  href: string;
  icon: string;
}
