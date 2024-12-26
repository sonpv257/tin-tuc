import React from "react";
import { SnackbarProvider, useSnackbar } from "notistack";

interface NotificationProps {
  message: string;
  variant: "success" | "error" | "warning" | "info";
  duration?: number;
}

export const Notification: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <SnackbarProvider
      maxSnack={2}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      {children}
    </SnackbarProvider>
  );
};

export const useNotify = () => {
  const { enqueueSnackbar } = useSnackbar();

  const showNotification = ({
    message,
    variant,
    duration = 1500,
  }: NotificationProps) => {
    enqueueSnackbar(message, {
      variant,
      autoHideDuration: duration,
    });
  };

  return { showNotification };
};
