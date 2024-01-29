import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios';
import { BASE_URL } from '../constants/endpoint';

const AxiosInstanceConfig: CreateAxiosDefaults = {
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
    'X-Custom-Header': 'foobar',
  },
  baseURL: BASE_URL
};

const AxiosInstance: AxiosInstance = axios.create(AxiosInstanceConfig);

export default AxiosInstance;