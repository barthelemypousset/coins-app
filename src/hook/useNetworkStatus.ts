import NetInfo from "@react-native-community/netinfo";
import { useEffect, useState } from "react";

export function useNetworkStatus() {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    // On first render, subscribe to network status changement
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsOffline(!state.isConnected);
    });

    // On unmount will call NetInfo unsubscribe func to free the listener
    return unsubscribe;
  }, []);

  // Whenever the net status changes, isOffline updates and thus the components using this hook
  return { isOffline };
}
