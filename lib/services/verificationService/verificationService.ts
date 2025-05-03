import { ZKType } from "../../enums/ZKType";
import { sendIawiaConnectEvent } from "../eventService/eventService";
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

    const payload = {
      companyName: this.companyName,
      companyLogo: this.companyLogo,
      zkTypes: zkTypes,
      circuits: randomFunctions.circuitPaths,
    };

    console.log(payload);

    sendIawiaConnectEvent(payload);
  }
}

export default VerificationService;
