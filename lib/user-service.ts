'use server'

import { cookies } from "next/headers";

export async function getUser(): Promise<any> {
    const cookieStore = await cookies();
    return cookieStore.get('user');
}

export async function setUser(user: any): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.set('user', JSON.stringify(user));
}

export async function deleteUser(): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.delete('user');
}
