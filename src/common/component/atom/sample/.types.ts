export interface SampleProps {
  children: React.ReactNode;
  onChange: Function;
}

export interface SampleChildProps {
  children: React.ReactNode;
}

export interface SampleContextValue {
  state: boolean;
  handleState: Function;
}
