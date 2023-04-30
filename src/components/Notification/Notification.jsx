import React from 'react';
import PropTypes from 'prop-types';
import { Section } from '../Section/Section';
import css from './Notification.module.css';

export const Notification = ({ message }) => {
  return (
    <Section title="">
      <div className={css.message}>{message}</div>
    </Section>
  );
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

// export default Notification;
