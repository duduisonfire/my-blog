import axios from 'axios';

export const blogApi = axios.create({
	baseURL: process.env.BackEndApi,
	timeout: 1000,
});
