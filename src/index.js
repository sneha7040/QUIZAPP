import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import WifiOffIcon from '@mui/icons-material/WifiOff';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { useNetworkCheck, NetworkProvider } from "./Offline";  
import { ClipLoader } from "react-spinners";  
import { ColorModeProvider } from "./Component/ThemeContext";


const queryClient = new QueryClient();

const RootComponent = () => {
  const { isOnline } = useNetworkCheck(); 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false); 
    }, 1000); 

    return () => clearTimeout(timeout); 
  }, [isOnline]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "20vh" }}>
        <ClipLoader size={60} color={"#e325fc"} loading={loading} />
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <React.StrictMode>
      {isOnline ? (
        <QueryClientProvider client={queryClient}>
          <ToastContainer />
          <App />
        </QueryClientProvider>
      ) : (
        <div style={{ textAlign: "center", marginTop: "20vh" }}>
          <WifiOffIcon sx={{ width: "100px", height: "100px" }} />
          <p>You're currently offline. Please check your connection.</p>
        </div>
      )}
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ColorModeProvider>
  <NetworkProvider>  
    <RootComponent />
  </NetworkProvider>
  </ColorModeProvider>
);

