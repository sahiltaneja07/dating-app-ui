import React from 'react'
import BottomNav from './bottom-nav';

const HomeLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            {children}
            <BottomNav />
        </>
    )
}

export default HomeLayout;