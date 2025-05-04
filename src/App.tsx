import { ZKType } from "../lib/enums/ZKType";
import IawiaButton from "../lib/IawiaButton/IawiaButton";
import { useVerificationListener } from "../lib/main";
import VerificationService from "../lib/services/verificationService/verificationService";

function App() {
  const verificationService = new VerificationService({
    companyName: "Wamo",
    companyLogo: "https://i.ibb.co/nN85Vq16/logo-black.png",
  });

  useVerificationListener({
    onVerificationSuccess: () => {
      alert("Verification success");
    },
    onVerificationFailed: () => {
      alert("Verification failed");
    },
  });

  return (
    <>
      <IawiaButton
        onClick={() => {
          verificationService.verify([
            ZKType.NATIONALITY_IS_TUR,
            ZKType.AGE_IS_OVER_24,
          ]);
        }}
      />
    </>
  );
}

export default App;
