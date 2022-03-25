import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IEvent } from '../../pages/types';
import AddressIcon from '../Icons/AddressIcon';
import ArrowRightIcon from '../Icons/ArrowRightIcon';
import DateIcon from '../Icons/DateIcon';
import Button from '../UI/Button';
import classes from './EventItem.module.css';
const EventItem = ({ title, image, date, location, id }: IEvent) => {
  const readableDate = new Date(date).toLocaleDateString(
    'en-us',

    {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }
  );

  return (
    <li className={classes.item}>
      <Image src={'/' + image} alt={title} width={300} height={300} />

      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{readableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{location.replace(', ', '\n')}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${id}`}>
            <span>Exploe Events</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
