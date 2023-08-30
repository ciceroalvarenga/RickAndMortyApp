import React, {useEffect, useState} from 'react';
import {Icon} from '@components/Icon';
import ArrowBack from '@assets/arrowBack.svg';

import Splash from '@assets/background.png';
import {
  Title,
  TextName,
  Header,
  HeaderContainer,
  ContentContainer,
  Content,
  Planet,
  ImageCharacter,
  StatusContainer,
  StatusLife,
  StatusText,
  Box,
  TextDescription,
  EpisodesContainer,
  Row,
} from './styles';
import {useAppSelector} from '@store/hooks';
import {useNavigation} from '@react-navigation/native';
import {selectCharacter} from '@store/character/character.selectors';

interface EpisodeData {
  id: number;
  name: string;
  air_date: string;
}

export function AboutCharacter() {
  const navigation = useNavigation();
  const character = useAppSelector(selectCharacter);
  const [episodes, setEpisodes] = useState<(EpisodeData | null)[]>([]);

  const episodeUrls = character?.episode;

  const fetchEpisodeData = async (url: string) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data as EpisodeData;
    } catch (error) {
      console.error('Erro ao obter dados do episódio:', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchEpisodes = async () => {
      if (episodeUrls) {
        const episodeDataPromises = episodeUrls.map(url =>
          fetchEpisodeData(url),
        );
        const episodesData = await Promise.all(episodeDataPromises);
        const filteredEpisodes = episodesData.filter(
          episodeData => episodeData !== null,
        );
        setEpisodes(filteredEpisodes);
      }
    };

    fetchEpisodes();
  }, []);

  console.log('episodes', episodes);

  return (
    <>
      <HeaderContainer>
        <Header onPress={() => navigation.goBack()}>
          <Icon>
            <ArrowBack />
          </Icon>
        </Header>
        <Planet>
          <ImageCharacter source={{uri: character?.image}} />
        </Planet>
      </HeaderContainer>
      <ContentContainer>
        <Content>
          <StatusContainer>
            <StatusLife status={character?.status} />

            <Title>{character?.name} </Title>
            <StatusText status={character?.status}>
              ({character?.status})
            </StatusText>
          </StatusContainer>
          <StatusContainer>
            <TextDescription>
              ({character?.species} - {character?.gender})
            </TextDescription>
          </StatusContainer>
          <Box>
            <Title>Episodes ({character?.episode.length})</Title>
          </Box>

          {episodes.map(episode => (
            <>
              <EpisodesContainer>
                <Row>
                  <TextName>{episode?.id} - </TextName>
                  <TextName>Name</TextName>
                  <TextName>{episode?.name}</TextName>
                </Row>
                <Row>
                  <TextName>{''}</TextName>
                  <TextName>Air Date</TextName>
                  <TextName>{episode?.air_date}</TextName>
                </Row>
              </EpisodesContainer>
            </>
          ))}
        </Content>
      </ContentContainer>
    </>
  );
}
