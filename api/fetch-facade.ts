import { API_CONFIG } from "./config"

export function getUrl(endpoint: string, params?: Record<string, string>): string {
    const searchParams = new URLSearchParams({
        ...params
    })
    let url = `${API_CONFIG.BASE_URL}/${endpoint}`
    if (params) {
        url += `?${searchParams.toString()}`
    }
    return url;
}

export async function getApi<T>(url: string): Promise<T> {
    const requestOptions: RequestInit = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
    };
    const respose = await fetch(url, requestOptions)
    if (!respose.ok) {
        throw new Error(respose.statusText)
    }
    return respose.json()
}

export async function postApi<T>(url: string, data: any): Promise<T> {
    const requestOptions: RequestInit = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        credentials: 'include'
    };

    const response = await fetch(url, requestOptions)
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return response.json()
}

export async function putApi<T>(url: string, data: any): Promise<T> {
    const requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    };

    const response = await fetch(url, requestOptions)
    if (!response.ok) {
        throw new Error(response.statusText)
    }
    return response.json()
}

// export async function deleteApi<T>(url: string): Promise<T> {

// }