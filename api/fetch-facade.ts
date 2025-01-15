import axios from 'axios';
import { API_CONFIG } from './config';

export function getUrl(
    endpoint: string,
    params?: Record<string, string>
): string {
    const searchParams = new URLSearchParams({
        ...params,
    });
    let url = `${API_CONFIG.BASE_URL}/${endpoint}`;
    if (params) {
        url += `?${searchParams.toString()}`;
    }
    return url;
}

export async function getApi<T>(url: string): Promise<T> {
    const result = await axios.get(url, { withCredentials: true });
    return result.data;
}

export async function postApi<T>(url: string, data: any): Promise<T> {
    const result = await axios.post(url, data, { withCredentials: true });
    return result.data;
}

export async function putApi<T>(url: string, data: any): Promise<T> {
    const result = await axios.put(url, data, { withCredentials: true });
    return result.data;
}

// export async function deleteApi<T>(url: string): Promise<T> {

// }
