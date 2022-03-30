import React, { useRef } from 'react';
import { useGlobalContext } from '../../store/Context';
import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {
  const { showNotificationHandler } = useGlobalContext();
  const emailInputRef = useRef<HTMLInputElement>(null);

  async function registrationHandler(event: React.FormEvent) {
    event.preventDefault();
    const enterderEmail = emailInputRef.current?.value;
    const reqBody = { email: enterderEmail };

    showNotificationHandler({
      message: 'Registering',
      show: true,
      status: 'pending',
      title: 'Signing Up...',
    });

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // if (!response.ok) {
      //   throw new Error('Somthing went wrong');
      // }

      const data = await response.json();

      console.log(data);
      showNotificationHandler({
        message: 'Email Added',
        show: true,
        status: 'success',
        title: 'Success!',
      });
    } catch (error) {
      showNotificationHandler({
        message: 'Something went wrong',
        show: true,
        status: 'error',
        title: 'Error!',
      });
    }
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
