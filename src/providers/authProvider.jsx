import { createContext } from "react";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const user = []
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;