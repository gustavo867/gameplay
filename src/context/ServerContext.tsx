import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { api } from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COLLECTION_APPOINTMENTS } from "../config/database";

type Server = {
  id: string;
  icon: string;
  name: string;
  owner: boolean;
};

type Appoitment = {
  id: string;
  guild: {
    id: string;
    name: string;
    icon: string;
    owner: boolean;
  };
  category: string;
  date: string;
  description: string;
};

type Children = {
  children: ReactNode;
};

type IContext = {
  servers: Server[];
  setServers: React.Dispatch<React.SetStateAction<Server[]>>;
  serverSelected: Server | undefined;
  setServerSelected: React.Dispatch<React.SetStateAction<Server | undefined>>;
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentCategory: string;
  setCurrentCategory: React.Dispatch<React.SetStateAction<string>>;
  appointments: Appoitment[];
  setAppointments: React.Dispatch<React.SetStateAction<Appoitment[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ServerContext = createContext<IContext>({} as IContext);

export function ServerContextProvider({ children }: Children) {
  const [servers, setServers] = useState<Server[]>([]);
  const [serverSelected, setServerSelected] = useState<Server>();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");
  const [appointments, setAppointments] = useState<Appoitment[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchGuilds = useCallback(async () => {
    const response = await api.get("/users/@me/guilds");

    setServers(response.data);

    // setServers(response.data);
    setLoading(false);
  }, []);

  const loadAppointmentsFromStorage = useCallback(async () => {
    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);

    if (storage) {
      const appointment = JSON.parse(storage) as Appoitment[];

      setAppointments(appointment);
    }
  }, []);

  useEffect(() => {
    loadAppointmentsFromStorage();
  }, []);

  useEffect(() => {
    fetchGuilds();
  }, []);

  const values = useMemo(
    () => ({
      servers,
      setServers,
      serverSelected,
      setServerSelected,
      modalOpen,
      setModalOpen,
      currentCategory,
      setCurrentCategory,
      appointments,
      setAppointments,
      loading,
      setLoading,
    }),
    [
      servers,
      setServers,
      serverSelected,
      setServerSelected,
      modalOpen,
      setModalOpen,
      currentCategory,
      setCurrentCategory,
      appointments,
      setAppointments,
      loading,
      setLoading,
    ]
  );

  return (
    <ServerContext.Provider value={values}>{children}</ServerContext.Provider>
  );
}
