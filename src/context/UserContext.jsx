import React from 'react'

const UserStateContext = React.createContext();

const UserDispatchContext = React.createContext();

function UserProvider({children}) {
    const [user, setUser] = React.useState(null);

    return (
        <UserStateContext.Provider value={user}>
            <UserDispatchContext.Provider value={setUser}>
                {children}
            </UserDispatchContext.Provider>
        </UserStateContext.Provider>
    )
}

function useUserState() {
    const context = React.useContext(UserStateContext);

    if(context===undefined) throw new Error("useUserState must be used within a UserProvider.");

    return context;
}

function useUserDispatch() {
    const context = React.useContext(UserDispatchContext);

    if(context===undefined) throw new Error("useUserDispatch must be used within a UserProvider.");

    return context;
}