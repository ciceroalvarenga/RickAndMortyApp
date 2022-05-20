import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #000;
`;
export const ImageBackground = styled.ImageBackground`
  flex: 1;
  padding: 15px;
`;
export const Title = styled.Text`
  color: ${({theme}) => theme.textColor.white};
  font-weight: bold;
  font-size: 33px;
  padding-bottom: 25px;
`;
