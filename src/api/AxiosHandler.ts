import axios from 'axios';

// Set Base Url Paras
const port = 5047;
const baseUrl = '/api';
const { protocol, hostname } = window.location;

// Get Api Default Url
function getRootUrl() : string {
  return `${protocol}//${hostname}:${port}`;
}

// Create Axios Instance
const handler = axios.create({
  baseURL: getRootUrl() + baseUrl,
  headers: { 'Content-Type': 'application/json' },
});

// Default Request Without Token
const noTokenRequests = ['/Login'];

// Request Interceptors
handler.interceptors.request.use(
  (config) => {
    console.log('handler', config);
    return config;
  },
  (error) => {
    console.log('handler', error);
    return Promise.reject(error);
  },
);
// Response Interceptors
handler.interceptors.response.use(
  (config) => {
    console.log('handler', config);
    return config;
  },
  (error) => {
    console.log('handler', error);
    return Promise.reject(error);
  },
);

export default handler;
