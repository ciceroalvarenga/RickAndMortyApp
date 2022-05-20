import qs from 'qs';
import {api} from '@services/api';

interface RickMortyApiGetProps {
  page?: number;
  text?: string;
}

async function RickMortyApiGet({page, text}: RickMortyApiGetProps) {
  const params = {
    page,
    name: text,
  };
  const result = await api
    .get(`character?${qs.stringify(params)}`)
    .then(res => {
      return res.data.results;
    });

  return result;
}

export default RickMortyApiGet;
