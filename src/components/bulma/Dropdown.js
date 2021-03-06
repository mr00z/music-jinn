import React from 'react';
import PropTypes from 'prop-types';
import styles from './bulma.scss';

const Dropdown = ({ name, options, onChange }) => (
  <div className={styles.dropdown}>
    <div className="control">
      <div className="select">
        <select onChange={onChange} name={name} className="has-text-grey-dark">
          {options.map((value, index) => (
            <option key={index}>{value}</option>
          ))}
        </select>
      </div>
    </div>
  </div>
);

export default Dropdown;

Dropdown.propTypes = {
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};
