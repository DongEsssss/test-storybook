import type React from 'react';

export interface TableType {
  head: string[];
  body: string[][] | React.FC[][];
  edit?: Array<
    Array<{
      icon: boolean;
      copyValue?: string;
      inputValue?: string;
      clickableLink?: string;
      isValid?: (value: string) => unknown;
      errorMessage?: string;
    }>
  >;
  copy?: Array<
    Array<{
      icon: boolean;
      copyValue?: string;
    }>
  >;
}
