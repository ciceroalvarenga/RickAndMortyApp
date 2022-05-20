import React, {useCallback} from 'react';

import {Icon} from '@components/Icon';

import Arrow from '@assets/arrow.svg';
import SaveOutline from '@assets/saveOutline.svg';
import Saved from '@assets/saved.svg';
import {useSelector, useDispatch} from 'react-redux';
import {addToFavorite, removeFromFavorite} from '@store/favoriteSlice';
import {RootState} from '@store/store';

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

interface PropsCard {
  name: string;
  status: string;
  species: string;
  gender?: string;
  origin: {
    name: string;
  };
  image: string;
  character: CharacterDetailProps;
}

export function Card({
  name,
  status,
  species,
  origin,
  image,
  character,
}: PropsCard) {
  const favorites = useSelector(
    (state: RootState) => state.charactersFavorites,
  );
  const dispatch = useDispatch();

  const handleAddToFavorite = useCallback(
    async (characters: CharacterDetailProps) => {
      const charactersFound = favorites.find(
        favorite => favorite.id === characters.id,
      );

      if (!charactersFound) {
        await dispatch(addToFavorite(characters));
      } else {
        await dispatch(removeFromFavorite(characters.id));
      }
    },
    [dispatch, favorites],
  );

  const checked = favorites.find(favorite => favorite.id === character.id);

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
        <Description>{origin ? origin.name : ''}</Description>
        <ContainerFooter>
          <Rodape>Read more</Rodape>
          <Icon>
            <Arrow />
          </Icon>
        </ContainerFooter>
      </ContainerContent>
    </Container>
  );
}
