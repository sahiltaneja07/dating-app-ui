'use client'

import React from 'react'
import BottomNav from './bottom-nav';
import useInterceptor from '@/hooks/use-interceptor';

const HomeLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const interceptor = useInterceptor();
    return (
        <>
            {children}
            <BottomNav />
        </>
    )
}

export default HomeLayout;