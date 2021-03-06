import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const SubmitButton = ({ onClick, isLoading, children, ...otherProps }) => (
  <button
    type="submit"
    className={clsx('button text-center is-primary is-medium is-size-6-mobile', {
      'is-loading': isLoading,
    })}
    onClick={onClick}
    {...otherProps}
  >
    {children}
  </button>
);

export default SubmitButton;

SubmitButton.propTypes = {
  onClick: PropTypes.func,
  isLoading: PropTypes.bool,
  children: PropTypes.node,
};
