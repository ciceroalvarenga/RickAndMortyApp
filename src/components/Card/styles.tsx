import styled from 'styled-components/native';

type ContainerProps = {
  status: string;
};

export const ButtonSave = styled.TouchableOpacity``;

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.cardBackground};
  flex-direction: row;
  margin-bottom: 15px;
  border-radius: 15px;
`;

export const ImageCharacter = styled.Image`
  width: 120px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
`;

export const ContainerContent = styled.View`
  flex: 1;
  padding: 15px;
`;

export const ContainerHeader = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const StatusContainer = styled.View`
  align-items: center;
  flex-direction: row;
  margin-bottom: 10px;
`;
export const StatusLife = styled.View<ContainerProps>`
  background-color: ${({theme, status}) => theme.colors[status]};
  height: 10px;
  width: 10px;
  border-radius: 5px;
  margin-right: 5px;
`;
export const StatusText = styled.Text`
  color: ${({theme}) => theme.textColor.white};
  font-weight: 700;
`;

export const ContainerFooter = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: ${({theme}) => theme.textColor.white};
  width: 80%;
`;

export const Description = styled.Text`
  color: ${({theme}) => theme.textColor.white};
`;

export const DescriptionTitle = styled.Text`
  color: ${({theme}) => theme.textColor.subtitle};
`;

export const Rodape = styled.Text`
  color: ${({theme}) => theme.textColor.white};
  font-weight: 700;
  margin-right: 15px;
`;
