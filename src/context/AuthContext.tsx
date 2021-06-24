import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import * as AuthSession from "expo-auth-session";
import {
  CLIENT_ID,
  REDIRECT_URI,
  RESPONSE_TYPE,
  SCOPE,
} from "../config/discord";
import { api } from "../services/api";

export type User = {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
};

type AuthContextData = {
  user: User;
  signIn: () => void;
};

type Children = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export function AuthContextProvider({ children }: Children) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);

  const signIn = useCallback(async () => {
    try {
      setLoading(true);

      const authUrl = `https://discord.com/api/oauth2/authorize?client_id=857401389621575690&redirect_uri=http%3A%2F%2Fauth.expo.io%2FUNVERIFIED-192.168.1.68-gameplay&response_type=code&scope=email%20guilds%20identify%20connections`;

      const res = await AuthSession.startAsync({
        authUrl,
      });

      console.log("Res", res);
    } catch (e) {
      console.log("Error", e);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const values = useContext(AuthContext);

  return values;
}
