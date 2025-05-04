export function helloAnything(thing: string): string {
  return `Hello ${thing}!`;
}

export { VerificationService } from "./services/verificationService";
export { ZKType } from "./enums/ZKType";
export { default as useVerificationListener } from "./hooks/useVerificationListener";
