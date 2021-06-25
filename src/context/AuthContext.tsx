import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import * as AuthSession from "expo-auth-session";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  CDN_IMAGE,
  CLIENT_ID,
  REDIRECT_URI,
  RESPONSE_TYPE,
  SCOPE,
} from "../config/discord";
import { api } from "../services/api";
import { COLLECTION_USERS } from "../config/database";
import { Alert } from "react-native";

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
  signOut: () => void;
  loading: boolean;
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

      const authUrl = `${api.defaults.baseURL}oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const res = await AuthSession.startAsync({
        authUrl,
      });

      if (res.type === "success") {
        api.defaults.headers.authorization = `Bearer ${res.params.access_token}`;

        const userInfo = await api.get("/users/@me");

        const userData = {
          avatar: `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`,
          email: userInfo.data.email,
          firstName: userInfo.data.username.split(" ", 1),
          id: userInfo.data.id,
          token: res.params.access_token,
          username: userInfo.data.username,
        };

        await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData));

        setUser(userData);

        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
    }
  }, []);

  const signOut = useCallback(() => {
    Alert.alert("Deseja sair do gameplay", "", [
      {
        style: "cancel",
        text: "Cancelar",
      },
      {
        text: "Sim",
        onPress: () => {
          setUser({} as User);
          AsyncStorage.removeItem(COLLECTION_USERS);
        },
        style: "default",
      },
    ]);
  }, []);

  const loadUserFromStorage = useCallback(async () => {
    const storage = await AsyncStorage.getItem(COLLECTION_USERS);

    if (storage) {
      const user = JSON.parse(storage) as User;
      api.defaults.headers.authorization = `Bearer ${user.token}`;

      setUser(user);
    }
  }, []);

  useEffect(() => {
    loadUserFromStorage();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, loading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const values = useContext(AuthContext);

  return values;
}
