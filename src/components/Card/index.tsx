import React, {useCallback} from 'react';

import {Icon} from '@components/Icon';

import Arrow from '@assets/arrow.svg';
import SaveOutline from '@assets/saveOutline.svg';
import Saved from '@assets/saved.svg';
import {removeFromFavorite} from '@store/favoriteSlice';

import {
  Container,
  ImageCharacter,
  ContainerContent,
  ContainerHeader,
  Title,
  Description,
  Rodape,
  ContainerFooter,
  StatusContainer,
  StatusLife,
  StatusText,
  DescriptionTitle,
  ButtonSave,
} from './styles';
import {CharacterDetailProps} from 'interfaces';
import {useAppDispatch, useAppSelector} from '@store/hooks';
import {selectCharactersFavorite} from '@store/favorites/favorites.selectors';
import {
  setAddToFavorite,
  setRemoveFromFavorite,
} from '@store/favorites/favorites.actions';
import {useNavigation} from '@react-navigation/native';
import {setAddCharacter} from '@store/character/character.actions';

interface PropsCard {
  name: string;
  status: string;
  species: string;
  gender?: string;
  location: {
    name: string;
  };
  image: string;
  character: CharacterDetailProps;
}

export function Card({
  name,
  status,
  species,
  location,
  image,
  character,
}: PropsCard) {
  const favorites = useAppSelector(selectCharactersFavorite);

  const navigation = useNavigation();

  const dispatch = useAppDispatch();

  const handleAddToFavorite = useCallback(
    async (characters: CharacterDetailProps) => {
      const charactersFound = favorites?.find(
        favorite => favorite.id === characters.id,
      );

      if (!charactersFound) {
        dispatch(setAddToFavorite([characters]));
      } else {
        dispatch(setRemoveFromFavorite(characters.id));
      }
    },
    [dispatch, favorites],
  );

  const checked = favorites?.find(favorite => favorite.id === character.id);

  function handleAboutCharacter() {
    navigation.navigate('AboutCharacter');
    dispatch(setAddCharacter(character));
  }

  return (
    <Container>
      <ImageCharacter source={{uri: image}} />
      <ContainerContent>
        <ContainerHeader>
          <Title numberOfLines={1}>{name}</Title>
          <ButtonSave onPress={() => handleAddToFavorite(character)}>
            <Icon>{!checked ? <SaveOutline /> : <Saved />}</Icon>
          </ButtonSave>
        </ContainerHeader>
        <StatusContainer>
          <StatusLife status={status} />
          <StatusText>
            {status} - {species}
          </StatusText>
        </StatusContainer>
        <DescriptionTitle>Last known location:</DescriptionTitle>
        <Description>{location ? location.name : ''}</Description>
        <ContainerFooter onPress={handleAboutCharacter}>
          <Rodape>Saiba mais</Rodape>
          <Icon>
            <Arrow />
          </Icon>
        </ContainerFooter>
      </ContainerContent>
    </Container>
  );
}
