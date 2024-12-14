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
            <div className='main-container'>
                {children}
            </div>
        </QueryClientProvider>
    )
}

export default MainApp;