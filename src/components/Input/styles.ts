import {TextInput} from 'react-native';
import styled from 'styled-components/native';

export const ContainerInput = styled.View`
  background-color: ${({theme}) => theme.colors.inputBackground};
  margin: 0 0 20px 0;
  border-radius: 10px;
  padding: 15px;
  height: 50px;
  flex-direction: row;
  align-items: center;
`;

export const InputText = styled(TextInput)`
  color: ${({theme}) => theme.textColor.grey};
`;
