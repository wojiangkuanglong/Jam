import Axios, { AxiosResponse } from "axios";

interface Params {
  [key: string]: any;
}

export function onFulfilled(ar: AxiosResponse) {
  const { data } = ar;
  if (data.error) {
    return Promise.reject(data.error.message);
  }
  return data;
}

export async function onRejected(error: any) {
  return Promise.reject(error);
}

Axios.interceptors.response.use(onFulfilled, onRejected);

async function get<T = any>(url: string, params?: Params): Promise<T> {
  return Axios.get<T>(url, { params }) as Promise<any>;
}

async function post<T = any>(url: string, data: any): Promise<T> {
  return Axios.post<T>(url, data) as Promise<any>;
}

export const HttpClient = {
  get,
  post,
};
