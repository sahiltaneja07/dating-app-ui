'use client'

import {createContext, useContext, useState } from 'react';

type ContextType = {
    user: any;
    setUser: (user: any) => void;
    isOnboardingCompleted: boolean;
    setIsOnboardingCompleted: (onboarding: boolean) => void;
};

const BaseContext = createContext<ContextType | undefined>(undefined)

const BaseProvider = ({children}: {children: any}) => {
    const [user, setUser] = useState<ContextType['user']>(undefined);
    const [isOnboardingCompleted, setIsOnboardingCompleted] = useState<ContextType['isOnboardingCompleted']>(false);

    return(
        <BaseContext.Provider value={{user, setUser, isOnboardingCompleted, setIsOnboardingCompleted}}>
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
