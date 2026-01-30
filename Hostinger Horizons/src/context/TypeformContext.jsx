// This file is no longer used but kept to avoid breaking changes if referenced elsewhere improperly.
// The logic has been moved to local state and TypeformEmbed component.
import React, { createContext, useContext, useState } from 'react';

const TypeformContext = createContext();

export function TypeformProvider({ children }) {
  return (
    <TypeformContext.Provider value={{}}>
      {children}
    </TypeformContext.Provider>
  );
}

export function useTypeform() {
  return {};
}