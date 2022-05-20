import styled from 'styled-components/native';

type PropsContainerIcon = {
  customPadding?: number;
};

export const ContainerIcon = styled.View<PropsContainerIcon>`
  padding-right: ${({customPadding}) => `${customPadding}px`};
`;
