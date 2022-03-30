import React, { ReactNode } from 'react';
import { useGlobalContext } from '../../store/Context';
import Notification from '../UI/Notification';
import MainHeader from './MainHeader';

const Layout = ({ children }: { children: ReactNode }) => {
  const { notificationData } = useGlobalContext();
  return (
    <>
      {notificationData.show && (
        <Notification
          title={notificationData.title}
          message={notificationData.message}
          status={notificationData.status}
        />
      )}
      <MainHeader />
      <main>{children}</main>
    </>
  );
};

export default Layout;
