import qs from 'qs';
import {api} from '@services/api';

interface RickMortyApiGetProps {
  text: string;
}

async function SearchCharacter({text}: RickMortyApiGetProps) {
  const params = {
    name: text,
  };
  const result = await api
    .get(`character?${qs.stringify(params)}`)
    .then(res => {
      return res.data.results;
    });

  return result;
}

export default SearchCharacter;
