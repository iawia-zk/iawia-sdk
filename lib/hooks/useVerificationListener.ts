import { useCallback, useEffect } from "react";
import {
  TIawiaWalletMessageSchema,
  TUseVerificationListenerProps,
} from "./useVerificationListener.types";

function useVerificationListener(props: TUseVerificationListenerProps) {
  const compareResultWithExpectedResults = useCallback(
    (result: boolean[]) => {
      const storedExpectedResults = JSON.parse(
        localStorage.getItem("iawia_expected_results") || "[]"
      );

      console.log(storedExpectedResults, result);

      if (storedExpectedResults.length !== result.length) {
        console.log("VERIFICATION_FAILED: Result length mismatch");
        props.onVerificationFailed();
        return false;
      }

      const isVerified = storedExpectedResults.every(
        (expectedResult: boolean, index: number) =>
          expectedResult === result[index]
      );

      if (!isVerified) {
        console.log("VERIFICATION_FAILED: Result mismatch");
        props.onVerificationFailed();
        return false;
      }

      console.log("VERIFICATION_SUCCESS");
      props.onVerificationSuccess();
      return true;
    },
    [props]
  );

  useEffect(() => {
    window.addEventListener("IAWIA_WALLET_MESSAGE", (event) => {
      const detail = (event as unknown as TIawiaWalletMessageSchema).detail;

      if (detail.action === "VERIFICATION_RESPONSE") {
        compareResultWithExpectedResults(detail.payload as boolean[]);
      }
    });
  }, [compareResultWithExpectedResults]);
}

export default useVerificationListener;
