import React from 'react'

const MainApp = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className='container mx-auto p-4'>
            {children}
        </div>
    )
}

export default MainApp;