import React, { createContext, ReactNode, useMemo, useState } from "react";
import { server, appointments as Appointments } from "../utils/appointments";

type Server = {
  id: string;
  guild: {
    id: string;
    name: string;
    icon: string;
    owner: boolean;
  };
  category: string;
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
};

export const ServerContext = createContext<IContext>({} as IContext);

export function ServerContextProvider({ children }: Children) {
  const [servers, setServers] = useState<Server[]>(server);
  const [serverSelected, setServerSelected] = useState<Server>();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");
  const [appointments, setAppointments] = useState<Appoitment[]>(Appointments);

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
    ]
  );

  return (
    <ServerContext.Provider value={values}>{children}</ServerContext.Provider>
  );
}
