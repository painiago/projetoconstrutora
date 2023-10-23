'use client';

import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './styles.module.scss'; // Importe seu arquivo de estilos CSS


const MyComponent = () => {
  
  useEffect (() =>{

    const hasAlertBeenShow = localStorage.getItem('alertShown');

    if(!hasAlertBeenShow){
      toast.info("Bem-vindo ao nosso site!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
        closeOnClick: false,
        draggable: true,
        hideProgressBar: true,
      });
      localStorage.setItem('alertShown', 'true');
     }
  }, []);

  return (
    <div>
      {/* Resto do conteúdo */}
      <ToastContainer
        className={styles.toastContainer}
        toastClassName={styles.toast}
        bodyClassName={styles.toastBody}
        progressClassName={styles.toastProgress}
      />
    </div>
  );
};

export default MyComponent;
