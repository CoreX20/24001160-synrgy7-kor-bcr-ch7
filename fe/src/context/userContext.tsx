import { ReactNode, createContext, useEffect, useState } from "react";
interface ContextProps {
    children: ReactNode;
}
type UserContextType = {
    user: any;
};
export const UserContext = createContext<UserContextType | null>(null)

const UserProvider : React.FC<ContextProps> = ({children}) => {
    const token = localStorage.getItem("token");
    const [user, setUser] = useState<any>([])

    const getUser = async() => {
        const response = await fetch("http://localhost:3000/user/whoami", {
            method : "GET",
            headers : {
                Authorization : `Bearer ${token}`
            }
        });

        const data = await response.json();
        setUser(data)
    }    

    useEffect(()=>{
        getUser();
    },[])

    return(
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;