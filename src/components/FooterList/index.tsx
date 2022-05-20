import theme from '@global/styles/theme';
import React from 'react';
import {ActivityIndicator} from 'react-native';

import {Container} from './styles';

type FooterListProps = {
  load: boolean;
};

export function FooterList({load}: FooterListProps) {
  if (!load) {
    return null;
  }
  return (
    <Container>
      <ActivityIndicator size={30} color={theme.colors.Alive} />
    </Container>
  );
}
