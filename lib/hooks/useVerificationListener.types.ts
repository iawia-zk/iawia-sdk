export type TUseVerificationListenerProps = {
  onVerificationSuccess: () => void;
  onVerificationFailed: () => void;
};

export type TIawiaWalletMessageSchema = {
  detail: {
    action: string;
    payload: unknown;
  };
};
