import React from 'react';
import {FlatList} from 'react-native';

import {Card} from '@components/Card';

import Splash from '@assets/splash.png';
import {Container, ImageBackground, Title} from './styles';
import {useSelector} from 'react-redux';
import {RootState} from '@store/store';

export function FavoriteCharacter() {
  const favorites = useSelector(
    (state: RootState) => state.charactersFavorites,
  );

  return (
    <Container>
      <ImageBackground source={Splash} resizeMode="cover">
        <Title>Favorites</Title>
        <FlatList
          data={favorites}
          keyExtractor={item => String(item.id)}
          initialNumToRender={favorites.length}
          renderItem={({item}) => (
            <>
              <Card
                key={item.id}
                image={item.image}
                name={item.name}
                origin={item.origin}
                species={item.species}
                status={item.status}
                character={item}
              />
            </>
          )}
        />
      </ImageBackground>
    </Container>
  );
}
