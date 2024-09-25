import React, { createContext, useContext } from "react";
import { Container } from "inversify";

const ContainerContext = createContext<Container | null>(null);

export const ContainerProvider: React.FC<{ container: Container; children: React.ReactNode }> = ({ container, children }) => (
  <ContainerContext.Provider value={container}>{children}</ContainerContext.Provider>
);

export const useContainer = () => {
  const container = useContext(ContainerContext);
  if (!container) {
    throw new Error("useContainer must be used within a ContainerProvider");
  }
  return container;
};