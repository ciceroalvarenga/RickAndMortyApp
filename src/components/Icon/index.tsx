import React from 'react';

import {ContainerIcon} from './styles';

type PropsIcon = {
  width?: number;
  height?: number;
  name?: string;
  paddingHorizontal?: number;
  children?: any;
};

export function Icon({children, paddingHorizontal = 0}: PropsIcon) {
  return (
    <ContainerIcon customPadding={paddingHorizontal}>{children}</ContainerIcon>
  );
}
