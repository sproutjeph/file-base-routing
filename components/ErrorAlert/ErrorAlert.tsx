import classes from './ErrorAlert.module.css';
import { ReactNode } from 'react';

function ErrorAlert({ children }: { children: ReactNode }) {
  return <div className={classes.alert}>{children}</div>;
}

export default ErrorAlert;
