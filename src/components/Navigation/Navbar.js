import React, { useState } from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import Menu from '../bulma/Menu';
import HamburgerButton from './HamburgerButton';
import Icon from '../Icon/Icon';
import logo from '../../assets/logo.png';

import styles from './navigation.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(null);

  const handleChangeNavbarState = () => setIsOpen(!isOpen);

  return (
    <>
      {isOpen && <div className={styles.shadow} onClick={handleChangeNavbarState} />}
      <nav role="navigation" className={styles.navbar}>
        <HamburgerButton onClick={handleChangeNavbarState} isNavbarOpen={isOpen} />
        <div
          className={clsx(styles.navbar_active, {
            [styles['slide-in']]: isOpen === true,
            [styles['slide-out']]: isOpen === false,
          })}
        >
          <div className={styles.image_container}>
            <img src={logo} alt="Logo" />
          </div>
          <Menu>
            <Menu.List>
              <Menu.ListItem>
                <NavLink
                  to="/"
                  exact
                  activeClassName="is-active"
                  className="is-size-4"
                  onClick={handleChangeNavbarState}
                >
                  <Icon name="headphones" /> Music Jinn
                </NavLink>
              </Menu.ListItem>
              <Menu.ListItem>
                <NavLink
                  to="/preferences"
                  activeClassName="is-active"
                  className="is-size-4"
                  onClick={handleChangeNavbarState}
                >
                  <Icon name="cog" /> Music Preferences
                </NavLink>
              </Menu.ListItem>
              <Menu.ListItem>
                <NavLink
                  to="/songsBank"
                  activeClassName="is-active"
                  className="is-size-4"
                  onClick={handleChangeNavbarState}
                >
                  <Icon name="music" /> Songs Bank
                </NavLink>
              </Menu.ListItem>
            </Menu.List>
          </Menu>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
