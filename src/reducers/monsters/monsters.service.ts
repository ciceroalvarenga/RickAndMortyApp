import { API_URL } from '../../constants/env';
import axios from 'axios';
import { Monster } from '../../models/interfaces/monster.interface';

const getAll = async (): Promise<Monster[]> =>
  await fetch(`${API_URL}/monsters`).then(response => response.json());

const battle = async (params: any): Promise<Monster> =>
  await fetch(`${API_URL}/battle`, {
    method: 'POST',
    body: JSON.stringify(params),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  }).then(response => {
    return response.json();
  });

export const MonsterService = {
  getAll,
  battle,
};
