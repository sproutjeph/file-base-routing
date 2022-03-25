import React from 'react';
import { IEvent, IEventListProps } from '../../pages/types';
import EventItem from '../EventItem/EventItem';
import classes from './EventList.module.css';

const EventList = ({ events }: IEventListProps) => {
  return (
    <ul className={classes.list}>
      {events.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </ul>
  );
};

export default EventList;
