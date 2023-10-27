export { Header } from "./Header";
export { ChannelCard } from "./ChannelCard";
export { ChannelEntryModal } from "./ChannelEntryModal";
export { AlertToast } from "./AlertToast";
export * from "./form";
export * from "./channel";
export * from "./chat";
export * from "./user-settings";

import { Dispatch, SetStateAction } from "react";
export type AlertProps = {
  setAlertType: Dispatch<SetStateAction<"success" | "error" | undefined>>;
  setAlertStr: Dispatch<SetStateAction<string>>;
};
