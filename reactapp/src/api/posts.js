import axios from 'axios';
import { axios } from '../core';
export default {
  get: () => axios.get('/posts'),
};
