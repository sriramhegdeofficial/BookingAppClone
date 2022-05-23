import React, { createContext, useContext } from "react";

const PageStateContext = createContext();

export function PageStateWrapper({ children }) {
  const [state, setState] = React.useState(null);
  return (
    <PageStateContext.Provider value={[state, setState]}>
      {children}
    </PageStateContext.Provider>
  );
}

export function usePageState() {
  return useContext(PageStateContext);
}
