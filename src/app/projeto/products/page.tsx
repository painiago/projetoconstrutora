/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import styles from './styles.module.scss'


export default function BtnContato (){
  return (
    <>
     <section className={styles.containerprojetos}>
            <div className={styles.containerbtn}>
              <Link href="/contato">
                <button className={styles.btnempresa}>
                  Entrar em contato
                </button>
              </Link>
            </div>
          </section>
    </>

  )
}