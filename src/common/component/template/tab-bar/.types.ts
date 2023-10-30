export interface TabBarProps {
  onTab: Function;
  children: React.ReactNode | undefined;
}

export interface TabBarButtonProps {
  title?: string;
  href?: string;
  icon?: string;
  children?: React.ReactNode;
}

export interface TabBarContextValue {
  touch: Function;
  selected: string;
}
