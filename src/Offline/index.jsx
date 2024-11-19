import {
    useContext,
    createContext,
    useEffect,
    useState,
    useCallback,
  } from "react";

  
  const NetworkContext = createContext(null);
  
  export const NetworkProvider = ({ children }) => {
    const [isOnline, setOnline] = useState(true); 
  
    useEffect(() => {
      const updateOnlineStatus = () => {
        if (typeof navigator !== "undefined") {
          setOnline(navigator.onLine);
        }
      };
  
      updateOnlineStatus(); // Set the initial status
  
      window.addEventListener("online", () => setOnline(true));
      window.addEventListener("offline", () => setOnline(false));
  
      return () => {
        window.removeEventListener("online", () => setOnline(true));
        window.removeEventListener("offline", () => setOnline(false));
      };
    }, []);
  
    return (
      <NetworkContext.Provider value={{ isOnline }}>
        {children}
      </NetworkContext.Provider>
    );
  };
  
  export const useNetworkCheck = () => {
    const context = useContext(NetworkContext);
    if (!context) {
      throw new Error("useNetworkCheck must be used inside of NetworkProvider");
    }
  
    return context;
  };
  