/* ADDED file */
import React from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/productlisting';

const cx = classNames.bind(styles);

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const Productlisting = () => {
  return (
    <div className={cx('about')}>
      <h1 className={cx('header')}>Product list</h1>
      <div className={cx('description')}>
        <p><br />
           Product 1 : Chair<br/>
           Product 2 : Table
        </p>
      </div>
    </div>
  );
};

export default Productlisting;
