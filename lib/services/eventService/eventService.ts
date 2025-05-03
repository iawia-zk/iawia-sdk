import { IAWIA_CONNECT_EVENT } from "./eventService.constants";
import { TIawiaConnectEventProps } from "./eventService.types";

export function sendIawiaConnectEvent(payload: TIawiaConnectEventProps) {
  const event = new CustomEvent(IAWIA_CONNECT_EVENT, { detail: payload });

  window.dispatchEvent(event);
}
