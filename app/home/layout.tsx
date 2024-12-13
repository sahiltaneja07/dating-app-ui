import React from 'react'
import BottomNav from './bottom-nav';

const HomeLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div>
            {children}
            <BottomNav />
        </div>
    )
}

export default HomeLayout;