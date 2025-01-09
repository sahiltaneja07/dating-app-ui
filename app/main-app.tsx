'use client'

import { BaseProvider } from '@/contexts/base.context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react'

const queryClient = new QueryClient();

const MainApp = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <QueryClientProvider client={queryClient}>
            <BaseProvider>
                <div className='main-container'>
                    {children}
                </div>
            </BaseProvider>
        </QueryClientProvider>
    )
}

export default MainApp;