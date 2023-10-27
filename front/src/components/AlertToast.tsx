import { Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";
import { useEffect, useState } from "react";

export const AlertToast = (props: {
  alertType: "success" | "error" | undefined;
  alertStr: string;
}) => {
  const { alertType, alertStr } = props;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (alertType === undefined) return;
    setOpen(true);
  }, [alertType]);

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setOpen(false)}
      >
        <Alert severity={alertType}>{alertStr}</Alert>
      </Snackbar>
    </>
  );
};
