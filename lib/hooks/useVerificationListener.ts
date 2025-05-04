import { useEffect } from "react";

function useVerificationListener() {
  useEffect(() => {
    window.addEventListener("IAWIA_WALLET_MESSAGE", (event) => {
      console.log("Got message from wallet extension:", event);
    });
  }, []);
}

export default useVerificationListener;
