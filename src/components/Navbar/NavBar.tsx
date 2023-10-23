'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';
import logo from '../../../public/img/logoexhouse.png';

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.containernavbar}>
        <Image src={logo} alt="Logo" className={styles.imglogo}  />

        <ul className={`${styles.navlist} ${showMenu ? styles.active : ''}`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/empresa">Empresa</Link>
          </li>
          <li>
            <Link href="/projeto">Projetos</Link>
          </li>
          <li>
            <Link href="/contato">Contato</Link>
          </li> 
        </ul>
        <div className={`${styles.menuIcon} ${showMenu ? styles.active : ''}`} onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
