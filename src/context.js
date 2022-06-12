import React, { useContext, useEffect, useState } from "react";

const url = "https://www.omdbapi.com/?apikey=34b9fdec";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("batman");
  const [data, setData] = useState(null);

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.Response === "True") {
        setData(data.Search || data);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(`${url}&s=${query}`);
  }, [query]);
  return (
    <AppContext.Provider
      value={{
        query,
        setQuery,
        data,
        isLoading,
        fetchData,
        setIsLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
