/* eslint-disable @next/next/no-img-element */
import { faTrowelBricks } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "./styles.module.scss"
import Image from 'next/image';
import equipe from '../../../public/img/equipe.jpg'
import Link from "next/link";
import dynamic from "next/dynamic";

const ScrollTop = dynamic(() => import('@/components/ScrollBtn/ScrollToTopButton'));

export const metadata = {
  title: 'Empresa',
  description: 'Na Exhouse Construtora Ltda., somos uma empresa de construção apaixonada por transformar sonhos em realidade.',
}

export default function Empresa() {
  return (
    <main>
      
      <div id="welcome-section" className={styles.welcomesectionempresa} >
        <div className={styles.textempresa} id="text">
            <h1>Nossa Empresa</h1>
        </div>
      </div>
      <section className={styles.backcolor}>
      <div className={styles.containerSobre} id="sobre">
        <div className={styles.spancontainer}>
          <span>
            <p>Na Exhouse Construtora Ltda., somos uma empresa de 
              construção apaixonada por transformar sonhos em realidade.
              Com anos de experiência e expertise no setor, nos dedicamos
               a construir espaços excepcionais que refletem a personalidade 
               e as necessidades únicas de nossos clientes. </p>
          </span>
          <span>
            <p>Nossa abordagem é pautada pela excelência, inovação e 
              compromisso com a qualidade em todas as etapas do processo.
               Trabalhamos em estreita colaboração com nossos clientes, 
               oferecendo soluções personalizadas e adaptadas a cada projeto,
                desde pequenas reformas a grandes empreendimentos. </p>
          </span>
          <span>
            <p>Nossa equipe talentosa de engenheiros, arquitetos e 
              profissionais da construção está sempre empenhada em 
              entregar resultados superiores, criando espaços que 
              combinam funcionalidade, beleza estética e durabilidade. 
              Seja para construir sua residência dos sonhos, seu espaço 
              comercial ou empreendimento corporativo, confie na Exhouse 
              Construtora Ltda. para tornar sua visão uma realidade 
              sólida e exemplar. </p>
          </span>
          </div>
      </div>
    </section>
    <section className={styles.containerequipe}>
    <h2>Nossa Equipe - Experientes e Apaixonados pela Construção
      <div className={styles.socialiconsempresa}>
        <FontAwesomeIcon icon={faTrowelBricks} />
        </div>
    </h2>
      <div className={styles.contentequipe}>
        <div className={styles.imagecontainer}>
          <Image src={equipe} alt="" className={styles.equipeimg} />
        </div>
        <div className={styles.textcontainer}>
          <p>Na Exhouse Construtora Ltda., contamos com uma equipe de profissionais talentosos e apaixonados pela arte da construção. Nossos engenheiros, arquitetos e especialistas em construção trabalham em harmonia para transformar projetos em obras de excelência.</p>
          <p>Cada membro da nossa equipe possui vasta experiência e conhecimento técnico, garantindo que cada detalhe seja cuidadosamente planejado e executado. Nosso compromisso com a qualidade é evidente em cada empreendimento que realizamos.</p>
        </div>
      </div>
        <div className={styles.lastext}>
          <p>Quando você escolhe a Construções Exemplares Ltda., você pode ter certeza de que terá uma equipe dedicada e comprometida em entregar resultados excepcionais. Junte-se a nós e deixe-nos fazer parte da realização dos seus projetos de construção.</p>
        </div>
        <div className={styles.containerfrase}>
          <p>Exhouse Construtora Ltda.: Construindo seus sonhos, superando expectativas!</p>
          <div className={styles.containerbtn}>
             <Link href='/contato'>
              <button className={styles.btnempresa}>
                Entrar em contato
              </button>
              </Link>
            </div>
        </div>
</section>
<ScrollTop/>
  </main>
  )
}