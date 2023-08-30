import styled from 'styled-components/native';

type ContainerProps = {
  status: string | undefined;
};

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #000;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

export const ContentContainer = styled.View`
  flex: 4;
  padding: 15px;
`;

export const Planet = styled.View`
  width: 100%;
  align-items: center;
`;

export const ImageCharacter = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 100px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.textColor.black};
  font-weight: bold;
  font-size: 20px;
`;

export const TextName = styled.Text`
  flex: 1;
  text-align: left;
  color: ${({theme}) => theme.textColor.black};
  font-weight: bold;
`;
export const TextDescription = styled.Text`
  color: ${({theme}) => theme.colors.orange};
  font-weight: bold;
`;

export const Header = styled.TouchableOpacity`
  align-self: flex-start;
  margin-left: 10px;
`;

export const Content = styled.View`
  top: 10%;
  width: 100%;
  align-items: center;
`;

export const StatusContainer = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
`;
export const StatusLife = styled.View<ContainerProps>`
  background-color: ${({theme, status}) => theme.colors[status]};
  height: 20px;
  width: 20px;
  border-radius: 10px;
  margin-right: 10px;
`;
export const StatusText = styled.Text<ContainerProps>`
  color: ${({theme, status}) => theme.colors[status]};
  font-size: 20px;
  font-weight: 700;
`;

export const Box = styled.View`
  margin-top: 15px;
  background-color: ${({theme}) => theme.colors.lightGrey};
  width: 100%;
  padding: 5px;
`;

export const EpisodesContainer = styled.View`
  width: 100%;
  padding: 16px;
  justify-content: center;
`;
export const Row = styled.View`
  flex-direction: row;
`;
