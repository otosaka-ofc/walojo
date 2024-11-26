import {
    createContext,
    ReactElement,
    useContext,
    useEffect,
    useState,
} from "react";
import { signinRequest, signupRequest, verifyTokenRequest } from "../api/auth";
import { FieldValues } from "react-hook-form";
import Cookie from "js-cookie";

export interface SignupValues {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

interface AuthContextType {
    signup: (values: FieldValues) => Promise<void>;
    signin: (values: FieldValues) => Promise<void>;
    logout: () => void;
    // Agrega otros métodos y propiedades de autenticación si es necesario
    user: SignupValues | null;
    isAutenticated: boolean;
    errors: string[];
    loading: boolean;
}
export const AuthContext = createContext<AuthContextType | undefined>(
    undefined
);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context)
        throw new Error("No AuthContext available for this application");

    return context;
};

export const AuthProvider = ({ children }: { children: ReactElement }) => {
    const [user, setUser] = useState<SignupValues | null>(null);
    const [isAutenticated, setIsAutenticated] = useState(false);
    const [errors, setErrors] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const signup = async (user: unknown) => {
        try {
            const response = await signupRequest(user);
            console.log(response.data);
            setUser(response.data);
            setIsAutenticated(true);
        } catch (error: unknown) {
            const err = error as { response: { data: Array<string> } };
            setErrors(err.response.data);
        }
    };

    const signin = async (user: unknown) => {
        try {
            const response = await signinRequest(user);
            setUser(response.data);
            setIsAutenticated(true);
        } catch (error: unknown) {
            const err = error as { response: { data: Array<string> } };
            console.log(err.response);
            if (Array.isArray(err.response.data)) setErrors(err.response.data);
        }
    };

    const logout = (): void => {
        setUser(null);
        setIsAutenticated(false);
        Cookie.remove("token");
    };

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]);
            }, 3000);
            return () => clearInterval(timer);
        }
    }, [errors]);
    useEffect(() => {
        async function checkLogin() {
            const cookies = Cookie.get();
            if (!cookies.token) {
                setIsAutenticated(false);
                setUser(null);
                setLoading(false);
                return;
            }
            try {
                const response: { data: SignupValues } =
                    await verifyTokenRequest(cookies.token);
                console.log(response.data);
                if (!response.data) {
                    setIsAutenticated(false);
                    setUser(null);
                    setLoading(false);
                    return;
                }
                setIsAutenticated(true);
                setUser(response.data);
                setLoading(false);
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (error: unknown) {
                setIsAutenticated(false);
                setUser(null);
                setLoading(false);
            }
        }
        checkLogin();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                signup,
                signin,
                logout,
                user,
                isAutenticated,
                errors,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
