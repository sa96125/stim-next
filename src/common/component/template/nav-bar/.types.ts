export type NavBarContextValue = {
  hasBackButton?: boolean;
  onIconClick: Function;
};

export type NavBarProps = {
  hasBackButton?: boolean;
  icon: string;
  onIconClick: Function;
  children?: React.ReactNode;
};
