import { post } from '@/request';

enum URL {
    login = '/login'
}

export interface LoginData {
  username: string;
  password: string;
}

const login = async (data: LoginData) => post<any>({ url: URL.login, data });
export { login };
