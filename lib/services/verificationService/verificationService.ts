import { ZKType } from "../../enums/ZKType";
import { sendIawiaConnectEvent } from "../eventService/eventService";
import { readCircuitFilesAsBase64 } from "../fileReaderService";
import { generateRandomFunctions } from "./verificationService.helpers";
import { TVerificationServiceProps } from "./verificationService.types";

class VerificationService {
  private companyName: string;
  private companyLogo: string;

  constructor(props: TVerificationServiceProps) {
    this.companyName = props.companyName;
    this.companyLogo = props.companyLogo;
  }

  async verify(zkTypes: ZKType[]) {
    const randomFunctions = generateRandomFunctions(zkTypes);

    const circuits = await readCircuitFilesAsBase64(
      randomFunctions.circuitPaths
    );

    const payload = {
      companyName: this.companyName,
      companyLogo: this.companyLogo,
      zkTypes: zkTypes,
      circuits: circuits,
    };

    // Store expected results in localStorage for later comparison
    localStorage.setItem(
      "iawia_expected_results",
      JSON.stringify(randomFunctions.expectedResults)
    );

    sendIawiaConnectEvent(payload);
  }
}

export default VerificationService;
