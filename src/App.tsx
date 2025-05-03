import { ZKType } from "../lib/enums/ZKType";
import IawiaButton from "../lib/IawiaButton/IawiaButton";
import VerificationService from "../lib/services/verificationService/verificationService";

function App() {
  const verificationService = new VerificationService({
    companyName: "Wamo",
    companyLogo: "https://i.ibb.co/nN85Vq16/logo-black.png",
  });

  return (
    <>
      <IawiaButton
        onClick={() => {
          verificationService.verify([ZKType.NATIONALITY_IS_TUR]);
        }}
      />
    </>
  );
}

export default App;
