import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import {Input} from '@components/Input';
import {Card} from '@components/Card';

import RickMortyApiGet from '@services/RickMortyServices';

import Splash from '@assets/splash.png';
import theme from '@global/styles/theme';
import {Container, ImageBackground} from './styles';
import {CharacterDetailProps} from '../../interfaces';
import {FooterList} from '@components/FooterList';

export function Home() {
  const [text, setText] = useState('');
  const [character, setCharacter] = useState<CharacterDetailProps[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function loadApi() {
    if (loading) {
      return;
    }
    setLoading(true);
    const response = await RickMortyApiGet({page});

    setCharacter([...character, ...response]);

    setLoading(false);
    if (page === 1) {
      setPage(page + 1);
    }
  }

  async function handleSearch(value: string) {
    const formattedQuery = value.toLowerCase();
    setPage(1);
    setCharacter([]);
    setLoading(true);
    const response = await RickMortyApiGet({text: formattedQuery});
    setCharacter(response);
    setText(formattedQuery);
    setPage(page + 1);
    setLoading(false);
  }

  async function moreCharacter() {
    if (loading) {
      return;
    }
    setLoading(true);

    const response = await RickMortyApiGet({page, text});
    setCharacter([...character, ...response]);
    setPage(page + 1);
    setLoading(false);
  }

  return (
    <Container>
      <ImageBackground source={Splash} resizeMode="cover">
        <Input
          placeholder="While character are you looking for?"
          placeholderTextColor={theme.textColor.grey}
          value={text}
          onSearch={(search: string) => {
            handleSearch(search);
          }}
        />
        {character ? (
          <FlatList
            data={character}
            keyExtractor={item => String(item.id)}
            initialNumToRender={character.length}
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
            onEndReachedThreshold={0.1}
            onEndReached={moreCharacter}
            ListFooterComponent={<FooterList load={loading} />}
          />
        ) : (
          <></>
        )}
      </ImageBackground>
    </Container>
  );
}
