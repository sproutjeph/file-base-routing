import React from 'react';
import classes from './Button.module.css';
import Link from 'next/link';
const Button = (props: any) => {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={classes.btn}>{props.children}</a>
      </Link>
    );
  }

  return (
    <button onClick={props.onClink} className={classes.btn}>
      {props.children}
    </button>
  );
};

export default Button;
