'use server'

import { cookies } from "next/headers";

export async function getAuthToken(): Promise<any> {
    const cookieStore = await cookies();
    return cookieStore.get('authToken');
}

export async function setAuthToken(user: any): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.set('authToken', JSON.stringify(user));
}

export async function deleteAuthToken(): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.delete('authToken');
}
