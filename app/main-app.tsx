'use client'

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
            <div className='container mx-auto p-4'>
                {children}
            </div>
        </QueryClientProvider>
    )
}

export default MainApp;