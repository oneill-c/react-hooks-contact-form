import axios from 'axios';

export const configureMiddleware = () => {
    axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
}