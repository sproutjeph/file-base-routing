import { useGlobalContext } from '../../store/Context';
import classes from './notification.module.css';

function Notification(props: any) {
  const { hideNotificationHandler } = useGlobalContext();

  const { title, message, status } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  if (status === 'pending') {
    statusClasses = classes.pending;
  }

  const activeClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={activeClasses} onClick={hideNotificationHandler}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
