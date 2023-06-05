import React from 'react';

import styles from './styles.module.scss';
import { faInstagram, faFacebookSquare, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';


const Footer = () => {
  return (
    <footer className={styles.footer}>
    <div className={styles.column}>
      <nav>
      <p>Informações</p>
        <ul>
          <li>
          <Link href='/empresa'> Empresa </Link>
          </li>
          <li>
          <Link href='/projeto'> Projetos</Link>
          </li>
          <li>
          <Link href='/contato'> Contato</Link>
          </li>
        </ul>
      </nav>
    </div>
    <div className={styles.column}>
      <p><strong>&copy; 2023 ExHouse Construtora. Todos os direitos reservados.</strong></p>
    </div>
    <div className={styles.column}>
      <div className={styles.socialIcons}>
        <p>Acesse nossas Redes Sociais</p>
        <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
        <FontAwesomeIcon icon={faTiktok} className={styles.icon} />
        <FontAwesomeIcon icon={faFacebookSquare} className={styles.icon} />
      </div>
    </div>
  </footer>

  );
};

export default Footer;
