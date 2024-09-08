import React, { createContext, useContext, useState, ReactNode } from "react";
import i18n from "i18next";

// Define the shape of the context value
interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
}

// Create the context with an undefined default value
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Create a provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // Initialize language state from i18n or default to 'en'
  const [language, setLanguage] = useState<string>(i18n.language || "en");

  // Function to change the language
  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang); // Change the language in i18n
    setLanguage(lang); // Update the local state
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleLanguageChange }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
