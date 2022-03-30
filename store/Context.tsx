import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { INotificationData, IValues } from '../types';

const AppContext = React.createContext({} as IValues);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [notificationData, setNotificationData] = useState<INotificationData>({
    message: '',
    status: '',
    title: '',
    show: false,
  });

  const showNotificationHandler = (notificationData: INotificationData) => {
    setNotificationData({ ...notificationData, show: true });
  };
  const hideNotificationHandler = () => {
    setNotificationData({ message: '', status: '', title: '', show: false });
  };

  useEffect(() => {
    if (
      notificationData.show === true &&
      (notificationData.status === 'error' ||
        notificationData.status === 'success')
    ) {
      const notificationTimeout = setTimeout(() => {
        hideNotificationHandler();
      }, 3000);
      return () => {
        clearTimeout(notificationTimeout);
      };
    }
  }, [notificationData]);

  return (
    <AppContext.Provider
      value={{
        notificationData,
        showNotificationHandler,
        hideNotificationHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
