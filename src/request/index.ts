import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import showMessage from './status';
import { IResponse } from './type';
import { getToken } from './auth';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL}`,
    withCredentials: true, // 表示跨域请求时是否需要使用凭证
    timeout: 3000, // 如果请求话费了超过 `timeout` 的时间，请求将被中断
    timeoutErrorMessage: '超时，请稍后再尝试',
    transformRequest: [
        (data) => JSON.stringify(data),
    ],
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
    },
});

// 请求拦截器
axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        const token = getToken();
        if (token) {
            // config.headers.Authorization = `${TokenPrefix}${token}`
        }
        return config;
    },
    (error) => {
        error.msg = '请求异常，请联系管理员！';
        return Promise.reject(error);
    },
);

// 响应拦截器
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
    // if (response.headers.authorization) {
    //   localStorage.setItem('app_token', response.headers.authorization)
    // } else if (response.data && response.data.token) {
    //   localStorage.setItem('app_token', response.data.token)
    // }

        if (response.status === 200) {
            return response;
        }
        showMessage(response.status);
        return response;
    },
    // 请求失败
    (error: any) => {
        const { response } = error;
        if (response) {
            // 请求已发出，但是不在2xx的范围
            showMessage(response.status);
            return Promise.reject(response.data);
        }
        showMessage('网络连接异常,请稍后再试!');
        return false;
    },
);

const request = <T = any>(config: AxiosRequestConfig): Promise<T> => {
    const conf = config;
    return new Promise((resolve) => {
        axiosInstance
            .request<any, AxiosResponse<IResponse>>(conf)
            .then((res: AxiosResponse<IResponse>) => {
                // resolve(res as unknown as Promise<T>);
                const {
                    data: { result },
                } = res;
                resolve(result as T);
            });
    });
};

// const request = <T = any>(config: AxiosRequestConfig, options?: AxiosRequestConfig): Promise<T> => {
//   if (typeof config === 'string') {
//     if (!options) {
//       return axiosInstance.request<T, T>({
//         url: config,
//       });
//       // throw new Error('请配置正确的请求参数');
//     } else {
//       return axiosInstance.request<T, T>({
//         url: config,
//         ...options,
//       });
//     }
//   } else {
//     return axiosInstance.request<T, T>(config);
//   }
// };

export function get<T = any>(config: AxiosRequestConfig): Promise<T> {
    return request({ ...config, method: 'GET' });
}

export function post<T = any>(config: AxiosRequestConfig): Promise<T> {
    return request({ ...config, method: 'POST' });
}

export default request;
export type { AxiosInstance, AxiosResponse };
