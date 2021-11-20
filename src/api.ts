import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://lighthouse-api-fiap.herokuapp.com/HelpReport',
});
