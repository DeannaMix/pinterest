import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseURL = apiKeys.firebaseKeys.databaseURL;

const getBoards = () => axios.get(`${baseURL}/boards.json`);

export default { getBoards };
