import { createContext, useContext, useState } from "react";

const initialState = {
  language: "sv",
  setLanguage: () => null,
};

const LanguageProviderContext = createContext(initialState);

function LanguageProvider(
  children,
  defaultLanguage = "sv",
  storageKey = "lang",
  ...props
) {
  const [language, setLanguage] = useState(
    () => (localStorage.getItem(storageKey)) || defaultLanguage
  );

  const value = {
    language,
    setLanguage: (lang) => {
      localStorage.setItem(storageKey, lang);
      setLanguage(lang);
    },
  };

  return (
    <LanguageProviderContext.Provider {...props} value={value}>
      {children}
    </LanguageProviderContext.Provider>
  );
}

const useLanguage = () => {
  const context = useContext(LanguageProviderContext);

  if (context === undefined)
    throw new Error("useLanguage must be used within a LanguageProvider");

  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { LanguageProvider, useLanguage };
