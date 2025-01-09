'use client'

import {createContext, useContext, useState } from 'react';

type ContextType = {
    user: any;
    setUser: (user: any) => void;
    onboarding: boolean;
    setOnboarding: (onboarding: boolean) => void;
};

const BaseContext = createContext<ContextType | undefined>(undefined)

const BaseProvider = ({children}: {children: any}) => {
    const [user, setUser] = useState<ContextType['user']>(undefined);
    const [onboarding, setOnboarding] = useState<ContextType['onboarding']>(false);

    return(
        <BaseContext.Provider value={{user, setUser, onboarding, setOnboarding}}>
            {children}
        </BaseContext.Provider>
    )
}

export const useBaseContext = () => {
    const context = useContext(BaseContext);
   
    if (!context) {
      throw new Error("useBaseContext must be used inside the BaseProvider");
    }
   
    return context;
};

export {BaseContext, BaseProvider};
