import { TIawiaButtonProps } from "./IawiaButton.types";

function IawiaButton(props: TIawiaButtonProps) {
  return <button onClick={props.onClick}>Verify with Iawia</button>;
}

export default IawiaButton;
