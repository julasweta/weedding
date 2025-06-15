import axios, { AxiosInstance, AxiosResponse } from "axios";


type IRes<DATA> = Promise<AxiosResponse<DATA>>;

const baseURL = import.meta.env.VITE_BACKEND_URL;
const apiService: AxiosInstance = axios.create({ baseURL });
console.log("baseURL", baseURL);


export { apiService, baseURL };
export type { IRes };