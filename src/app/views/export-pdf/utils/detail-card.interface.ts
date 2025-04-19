export interface DetailsCard {
  section: string;
  dataDetails: DataDetailsCard[];
}

export interface DataDetailsCard {
  key: string;
  value: string | number;
  helperText?: string;
  textType?: TextType;
  status?: boolean;
  title?: boolean;
  indicator?: boolean;
  link?: boolean;
}

export interface TextType {
  family?: TextFamily;
  size?: TextSize;
}

export enum DetailCardIndicators {
  alert = 'alert-indicator',
  success = 'success-indicator',
  error = 'error-indicator',
}

export enum TextFamily {
  bold = 'bold',
  demi = 'demi',
  regular = 'regular'
}

export enum TextSize {
  sm = 'sm',
  md = 'md',
  lg = 'lg'
}
