/* eslint-disable @next/next/no-img-element */
import styles from './page.module.scss'
import { faFacebookSquare, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import colaborador from '../../public/img/colaborador.png'
import imgsustentavel from '../../public/img/sustentavel.png'
import casa1 from '../../public/img/casa1.jpg'
import casa2 from '../../public/img/casa2.jpg'
import casa3 from '../../public/img/casa3.jpg'
import { ToastContainer} from 'react-toastify';
import dynamic from 'next/dynamic';

export const revalidate = 30

const ContatoHomeComponent = dynamic (() => import('./contatohome/page'));
const ScrollTop = dynamic(() => import('@/components/ScrollBtn/ScrollToTopButton'));
const AlertComp = dynamic (() => import ('@/components/Alert/alert'))


export default function Home() {
 
  return (
    
    <main className={styles.main}>
      <ScrollTop/>
      <ToastContainer
       className={styles.toast} />
       <AlertComp/>
    <section id="welcome-section" className={styles.welcomesection} >
      <div className={`${styles.container} ${styles.text}`} id="text">
         <h1>ExHouse Construtora</h1>
        <span className={styles.subtitle}>Construindo seus sonhos, superando expectativas!</span>
        </div>
       <div className={styles.web}>
        <div className={styles.socialicons}>
          <FontAwesomeIcon icon={faInstagram} className={styles.iconIns}/>
          <FontAwesomeIcon icon={faTiktok}  className={styles.iconTiktok}/>
          <FontAwesomeIcon icon={faFacebookSquare}  className={styles.iconFace}/>
          </div>
        </div>
    </section>
    <section className={styles.backcolor}>
      <div className={styles.containerSobre} id="sobre">
          <h2>Construção Sustentável</h2>
            <p>Nossa empresa de construção está comprometida com a sustentabilidade, adotando 
              práticas eco-friendly, promovendo eficiência energética, reduzindo o consumo de água 
              e priorizando o bem-estar dos ocupantes. Contribuímos para um futuro mais sustentável 
              e oferecemos soluções responsáveis aos nossos clientes.</p>          
           <div className={styles.imageContainer}>
            <Image src={imgsustentavel} alt="" className={styles.sustentavelimg} />
        </div>
      </div>
    </section>
    <div className={styles.box}>
      <div className={styles.cards}>
        <div className={`${styles.card} ${styles.card1}`}>
          <p>01</p>
          <p>Somos uma empresa de
          construção comprometida
          em oferecer serviços de 
          alta qualidade e soluções
          personalizadas para nossos
          clientes.</p>
        </div>
        <div className={`${styles.card} ${styles.card2}`}>
          <p>02</p>
          <p>Oferecemos serviços de construção
          personalizados e confiáveis. Nossa 
          empresa está comprometida em 
          entregar projetos dentro do prazo e 
          do orçamento estabelecidos, sem 
          comprometer a qualidade. </p>
        </div>
        <div className={`${styles.card} ${styles.card3}`}>
          <p>03</p>
          <p>Com décadas de experiência no setor
          oferecemos soluções completas, 
          desde o planejamento até a 
          execução de projetos residenciais 
          e comerciais.</p>
        </div>
      </div>
    </div>
<section className={styles.containerprojetos}>
  <div className={styles.cardsprojetos}>
    <h3>Nossos Projetos</h3>
    <div className={styles.cardsproject}>
      <div className={styles.allcards}>
        <Image src={casa1} alt="" className={styles.imgfluid} />
        <p>Residencial</p>
        <p>Morumbi</p>
       <Link href="/projeto/detailsprojetos/1">
       <button>Mais detalhes</button>
       
       </Link> 
      </div>
      <div className={styles.allcards}>
        <Image src={casa2} alt="" className={styles.imgfluid} />
        <p>Residencial</p>
        <p>Jardin</p>
        <Link href="/projeto/detailsprojetos/2">
        <button>Mais detalhes</button>
        </Link>
      </div>
      <div className={styles.allcards}>
        <Image src={casa3} alt="" className={styles.imgfluid} />
        <p>Residencial</p>
        <p>Itaim Bibi</p>
        <Link href="/projeto/detailsprojetos/3">
        <button className={styles.btn}>Mais detalhes</button>
        </Link>
      </div>
    </div>
  </div>
  <div className={styles.buttonContainer}>
    <Link href="/projeto"><button  className={styles.maisprojetos}>
      Mais projetos  
    <FontAwesomeIcon icon={faCircleArrowRight} className={styles.arrow} />
    </button>
    </Link>
  </div>
</section>
<section className={styles.containersectionvideo}>
  <div className={styles.containervideo}>
    <video className={styles.video} src="/img/videohome2.mp4" loop autoPlay muted></video>
    <div className={styles.overlay}></div>
  </div>
</section>
<section className={styles.containerconferir}>
<div className={styles.contentconferir}>
  <article>
    <h4>Casa dos Sonhos</h4>
    <p> Deixe-se encantar pela harmonia entre 
    conforto e sofisticação, em ambientes que
    convidam a viver momentos inesquecíveis.</p>
    <div className={styles.buttonContainer2}>
   <Link href="#contato">
    <button>
      Venha agora  
    <FontAwesomeIcon icon={faCircleArrowRight} className={styles.arrow} />
    </button>
    </Link>
    </div>
  </article>
</div>
<div>
  <Image src={colaborador} alt="" className={styles.colaborador} />
</div>
</section>
<section className={styles.containercolorsobre}>
      <div className={styles.containersobreempresa} id="sobre">
          <h2>Sobre a nossa empresa</h2>
          <span>
            <p>Somos uma empresa de construção comprometida em oferecer soluções 
              personalizadas e de alta qualidade para os projetos dos nossos clientes. Com 
              uma equipe experiente de engenheiros e arquitetos, estamos preparados para
              realizar desde pequenas reformas até grandes empreendimentos. Nosso foco
              está na excelência, na eficiência e na satisfação do cliente. </p>
          </span>
      </div>
    </section>
    <ContatoHomeComponent/>
    </main>
  )
}
