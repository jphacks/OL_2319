import { useState } from "react";
import { ModalBase } from "../_ModalBase";
import { UserSettingsTop } from "./_UserSettingsTop";
import {
  UserSettingsUpdateName,
  UserSettingsUpdateEmail,
  UserSettingsUpdatePassword,
  UserSettingsUpdateTags,
} from "./_UserSettingsUpdate";
import "../../styles/Modals.scss";
import { CreateChannel } from "./_CreateChannel";
import { AlertToast, AlertProps } from "..";

export type HandlePage = (page: string) => void;

export const UserSettingsModal = (props: { className?: string }) => {
  const { className } = props;
  const [page, setPage] = useState<string>("top");
  const [alertType, setAlertType] = useState<"success" | "error" | undefined>(
    undefined,
  );
  const [alertStr, setAlertStr] = useState("");
  const setAlert: AlertProps = { setAlertType, setAlertStr };

  const handlePage = (page: string) => {
    setPage(page);
  };

  const ModalContent = () => (
    <>
      <div className={className}>
        {page === "top" && <UserSettingsTop handlePage={handlePage} />}
        {page === "update-name" && (
          <UserSettingsUpdateName handlePage={handlePage} />
        )}
        {page === "update-email" && (
          <UserSettingsUpdateEmail handlePage={handlePage} />
        )}
        {page === "update-password" && (
          <UserSettingsUpdatePassword handlePage={handlePage} />
        )}
        {page === "update-tags" && (
          <UserSettingsUpdateTags handlePage={handlePage} />
        )}
        {page === "create-channel" && (
          <CreateChannel handlePage={handlePage} alertProps={setAlert} />
        )}
      </div>
    </>
  );

  return (
    <>
      <ModalBase children={<ModalContent />} id={`modal-user-settings`} />
      <AlertToast alertType={alertType} alertStr={alertStr} />
    </>
  );
};
