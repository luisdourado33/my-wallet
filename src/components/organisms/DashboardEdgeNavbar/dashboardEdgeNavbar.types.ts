export type EdgeNavbarType = {
  label: string;
  href: string;
  showLabel: boolean;
  icon?: any;
  color?: string;
  variant?: string;

  hasOwnComponent?: boolean;

  ownComponent?: JSX.Element;
};
