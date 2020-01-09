import React from "react";

export interface UseCreateStoreResponse<T> {
  (): T;
  Context: React.Context<T>;
  Provider: React.FC<{}>;
}

export function useCreateStore<T>(useValue: () => T) {
  const Context = React.createContext({});

  const Provider: React.FC = props => {
    const { children } = props;
    const value = useValue();

    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  const useContext = () => React.useContext(Context);
  useContext.Context = Context;
  useContext.Provider = Provider;

  return (useContext as unknown) as UseCreateStoreResponse<T>;
}
