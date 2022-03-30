export interface IEvent {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
}

export interface IEventListProps {
  events: IEvent[];
}

export interface INotificationData {
  title: string;
  message: string;
  status: 'pending' | 'success' | 'error' | '';
  show: boolean;
}

export interface IValues {
  showNotificationHandler: (notificationData: INotificationData) => void;
  hideNotificationHandler: () => void;
  notificationData: INotificationData;
}
