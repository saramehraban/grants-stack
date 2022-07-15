export interface Metadata {
  protocol: number;
  pointer: string;
  id: number;
  title: string;
  description: string;
  roadmap: string;
  challenges: string;
  website: string;
  projectImg?: string;
}

export type ChangeHandlers =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>
  | React.ChangeEvent<HTMLSelectElement>;

// Inputs
export type InputProps = {
  label: string;
  name: string;
  info?: string;
  value?: string | number;
  placeholder?: string;
  changeHandler: (event: ChangeHandlers) => void;
};

export type RadioInputProps = {
  name: string;
  value: string;
  currentValue?: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export interface ProjectEvent {
  id: number;
  block: number;
}

export interface MetaPtr {
  protocol: string;
  pointer: string;
}

export interface RoundMetadata {
  name: string;
}

export interface RoundApplicationQuestion {
  id: number;
  question: string;
  type: string;
  required: boolean;
  info?: string;
  choices?: string[];
}

export interface RoundApplicationMetadata {
  id: string;
  lastUpdatedOn: number;
  applicationSchema: RoundApplicationQuestion[];
}

export interface Round {
  address: string;
  applicationsStartTime: number;
  applicationsEndTime: number;
  roundStartTime: number;
  roundEndTime: number;
  token: string;
  roundMetaPtr: MetaPtr;
  roundMetadata: RoundMetadata;
  applicationMetaPtr: MetaPtr;
  applicationMetadata: RoundApplicationMetadata;
}
